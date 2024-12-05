# `networkFirewallNetworkFirewallPolicyApplicationGroup` Submodule <a name="`networkFirewallNetworkFirewallPolicyApplicationGroup` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyApplicationGroup <a name="NetworkFirewallNetworkFirewallPolicyApplicationGroup" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group oci_network_firewall_network_firewall_policy_application_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyApplicationGroup } from 'rhizo-co-terraform-provider-oci'

new networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup(scope: Construct, id: string, config: NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig">NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig">NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts">NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyApplicationGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isConstruct"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyApplicationGroup } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isTerraformElement"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyApplicationGroup } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isTerraformResource"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyApplicationGroup } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.generateConfigForImport"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyApplicationGroup } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyApplicationGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyApplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkFirewallNetworkFirewallPolicyApplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyApplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.parentResourceId">parentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.totalApps">totalApps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.appsInput">appsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.networkFirewallPolicyIdInput">networkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts">NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.apps">apps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parentResourceId`<sup>Required</sup> <a name="parentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.parentResourceId"></a>

```typescript
public readonly parentResourceId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference</a>

---

##### `totalApps`<sup>Required</sup> <a name="totalApps" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.totalApps"></a>

```typescript
public readonly totalApps: number;
```

- *Type:* number

---

##### `appsInput`<sup>Optional</sup> <a name="appsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.appsInput"></a>

```typescript
public readonly appsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkFirewallPolicyIdInput`<sup>Optional</sup> <a name="networkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.networkFirewallPolicyIdInput"></a>

```typescript
public readonly networkFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts">NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts</a>

---

##### `apps`<sup>Required</sup> <a name="apps" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.apps"></a>

```typescript
public readonly apps: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig <a name="NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyApplicationGroup } from 'rhizo-co-terraform-provider-oci'

const networkFirewallNetworkFirewallPolicyApplicationGroupConfig: networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.apps">apps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#apps NetworkFirewallNetworkFirewallPolicyApplicationGroup#apps}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#name NetworkFirewallNetworkFirewallPolicyApplicationGroup#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyApplicationGroup#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#id NetworkFirewallNetworkFirewallPolicyApplicationGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts">NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apps`<sup>Required</sup> <a name="apps" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.apps"></a>

```typescript
public readonly apps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#apps NetworkFirewallNetworkFirewallPolicyApplicationGroup#apps}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#name NetworkFirewallNetworkFirewallPolicyApplicationGroup#name}.

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyApplicationGroup#network_firewall_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#id NetworkFirewallNetworkFirewallPolicyApplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts">NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#timeouts NetworkFirewallNetworkFirewallPolicyApplicationGroup#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts <a name="NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyApplicationGroup } from 'rhizo-co-terraform-provider-oci'

const networkFirewallNetworkFirewallPolicyApplicationGroupTimeouts: networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#create NetworkFirewallNetworkFirewallPolicyApplicationGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#delete NetworkFirewallNetworkFirewallPolicyApplicationGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#update NetworkFirewallNetworkFirewallPolicyApplicationGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#create NetworkFirewallNetworkFirewallPolicyApplicationGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#delete NetworkFirewallNetworkFirewallPolicyApplicationGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_application_group#update NetworkFirewallNetworkFirewallPolicyApplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyApplicationGroup } from 'rhizo-co-terraform-provider-oci'

new networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts">NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyApplicationGroup.NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts">NetworkFirewallNetworkFirewallPolicyApplicationGroupTimeouts</a>

---



