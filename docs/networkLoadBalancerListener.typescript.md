# `networkLoadBalancerListener` Submodule <a name="`networkLoadBalancerListener` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerListener <a name="NetworkLoadBalancerListener" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener oci_network_load_balancer_listener}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.Initializer"></a>

```typescript
import { networkLoadBalancerListener } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerListener.NetworkLoadBalancerListener(scope: Construct, id: string, config: NetworkLoadBalancerListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig">NetworkLoadBalancerListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig">NetworkLoadBalancerListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetIsPpv2Enabled">resetIsPpv2Enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetL3IpIdleTimeout">resetL3IpIdleTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetTcpIdleTimeout">resetTcpIdleTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetUdpIdleTimeout">resetUdpIdleTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkLoadBalancerListenerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts">NetworkLoadBalancerListenerTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetIsPpv2Enabled` <a name="resetIsPpv2Enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetIsPpv2Enabled"></a>

```typescript
public resetIsPpv2Enabled(): void
```

##### `resetL3IpIdleTimeout` <a name="resetL3IpIdleTimeout" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetL3IpIdleTimeout"></a>

```typescript
public resetL3IpIdleTimeout(): void
```

##### `resetTcpIdleTimeout` <a name="resetTcpIdleTimeout" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetTcpIdleTimeout"></a>

```typescript
public resetTcpIdleTimeout(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUdpIdleTimeout` <a name="resetUdpIdleTimeout" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.resetUdpIdleTimeout"></a>

```typescript
public resetUdpIdleTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerListener resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.isConstruct"></a>

```typescript
import { networkLoadBalancerListener } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerListener.NetworkLoadBalancerListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.isTerraformElement"></a>

```typescript
import { networkLoadBalancerListener } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerListener.NetworkLoadBalancerListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.isTerraformResource"></a>

```typescript
import { networkLoadBalancerListener } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerListener.NetworkLoadBalancerListener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.generateConfigForImport"></a>

```typescript
import { networkLoadBalancerListener } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerListener.NetworkLoadBalancerListener.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkLoadBalancerListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkLoadBalancerListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkLoadBalancerListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference">NetworkLoadBalancerListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.defaultBackendSetNameInput">defaultBackendSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.isPpv2EnabledInput">isPpv2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.l3IpIdleTimeoutInput">l3IpIdleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.networkLoadBalancerIdInput">networkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.tcpIdleTimeoutInput">tcpIdleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts">NetworkLoadBalancerListenerTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.udpIdleTimeoutInput">udpIdleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.defaultBackendSetName">defaultBackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.isPpv2Enabled">isPpv2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.l3IpIdleTimeout">l3IpIdleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.tcpIdleTimeout">tcpIdleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.udpIdleTimeout">udpIdleTimeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkLoadBalancerListenerTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference">NetworkLoadBalancerListenerTimeoutsOutputReference</a>

---

##### `defaultBackendSetNameInput`<sup>Optional</sup> <a name="defaultBackendSetNameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.defaultBackendSetNameInput"></a>

```typescript
public readonly defaultBackendSetNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `isPpv2EnabledInput`<sup>Optional</sup> <a name="isPpv2EnabledInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.isPpv2EnabledInput"></a>

```typescript
public readonly isPpv2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `l3IpIdleTimeoutInput`<sup>Optional</sup> <a name="l3IpIdleTimeoutInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.l3IpIdleTimeoutInput"></a>

```typescript
public readonly l3IpIdleTimeoutInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkLoadBalancerIdInput`<sup>Optional</sup> <a name="networkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.networkLoadBalancerIdInput"></a>

```typescript
public readonly networkLoadBalancerIdInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `tcpIdleTimeoutInput`<sup>Optional</sup> <a name="tcpIdleTimeoutInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.tcpIdleTimeoutInput"></a>

```typescript
public readonly tcpIdleTimeoutInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkLoadBalancerListenerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts">NetworkLoadBalancerListenerTimeouts</a>

---

##### `udpIdleTimeoutInput`<sup>Optional</sup> <a name="udpIdleTimeoutInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.udpIdleTimeoutInput"></a>

```typescript
public readonly udpIdleTimeoutInput: number;
```

- *Type:* number

---

##### `defaultBackendSetName`<sup>Required</sup> <a name="defaultBackendSetName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.defaultBackendSetName"></a>

```typescript
public readonly defaultBackendSetName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `isPpv2Enabled`<sup>Required</sup> <a name="isPpv2Enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.isPpv2Enabled"></a>

```typescript
public readonly isPpv2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `l3IpIdleTimeout`<sup>Required</sup> <a name="l3IpIdleTimeout" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.l3IpIdleTimeout"></a>

```typescript
public readonly l3IpIdleTimeout: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `tcpIdleTimeout`<sup>Required</sup> <a name="tcpIdleTimeout" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.tcpIdleTimeout"></a>

```typescript
public readonly tcpIdleTimeout: number;
```

- *Type:* number

---

##### `udpIdleTimeout`<sup>Required</sup> <a name="udpIdleTimeout" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.udpIdleTimeout"></a>

```typescript
public readonly udpIdleTimeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerListenerConfig <a name="NetworkLoadBalancerListenerConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.Initializer"></a>

```typescript
import { networkLoadBalancerListener } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerListenerConfig: networkLoadBalancerListener.NetworkLoadBalancerListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.defaultBackendSetName">defaultBackendSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#default_backend_set_name NetworkLoadBalancerListener#default_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#name NetworkLoadBalancerListener#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#network_load_balancer_id NetworkLoadBalancerListener#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#port NetworkLoadBalancerListener#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#protocol NetworkLoadBalancerListener#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#id NetworkLoadBalancerListener#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#ip_version NetworkLoadBalancerListener#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.isPpv2Enabled">isPpv2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#is_ppv2enabled NetworkLoadBalancerListener#is_ppv2enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.l3IpIdleTimeout">l3IpIdleTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#l3ip_idle_timeout NetworkLoadBalancerListener#l3ip_idle_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.tcpIdleTimeout">tcpIdleTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#tcp_idle_timeout NetworkLoadBalancerListener#tcp_idle_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts">NetworkLoadBalancerListenerTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.udpIdleTimeout">udpIdleTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#udp_idle_timeout NetworkLoadBalancerListener#udp_idle_timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultBackendSetName`<sup>Required</sup> <a name="defaultBackendSetName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.defaultBackendSetName"></a>

```typescript
public readonly defaultBackendSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#default_backend_set_name NetworkLoadBalancerListener#default_backend_set_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#name NetworkLoadBalancerListener#name}.

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#network_load_balancer_id NetworkLoadBalancerListener#network_load_balancer_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#port NetworkLoadBalancerListener#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#protocol NetworkLoadBalancerListener#protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#id NetworkLoadBalancerListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#ip_version NetworkLoadBalancerListener#ip_version}.

---

##### `isPpv2Enabled`<sup>Optional</sup> <a name="isPpv2Enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.isPpv2Enabled"></a>

```typescript
public readonly isPpv2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#is_ppv2enabled NetworkLoadBalancerListener#is_ppv2enabled}.

---

##### `l3IpIdleTimeout`<sup>Optional</sup> <a name="l3IpIdleTimeout" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.l3IpIdleTimeout"></a>

```typescript
public readonly l3IpIdleTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#l3ip_idle_timeout NetworkLoadBalancerListener#l3ip_idle_timeout}.

---

##### `tcpIdleTimeout`<sup>Optional</sup> <a name="tcpIdleTimeout" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.tcpIdleTimeout"></a>

```typescript
public readonly tcpIdleTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#tcp_idle_timeout NetworkLoadBalancerListener#tcp_idle_timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkLoadBalancerListenerTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts">NetworkLoadBalancerListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#timeouts NetworkLoadBalancerListener#timeouts}

---

##### `udpIdleTimeout`<sup>Optional</sup> <a name="udpIdleTimeout" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerConfig.property.udpIdleTimeout"></a>

```typescript
public readonly udpIdleTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#udp_idle_timeout NetworkLoadBalancerListener#udp_idle_timeout}.

---

### NetworkLoadBalancerListenerTimeouts <a name="NetworkLoadBalancerListenerTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts.Initializer"></a>

```typescript
import { networkLoadBalancerListener } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerListenerTimeouts: networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#create NetworkLoadBalancerListener#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#delete NetworkLoadBalancerListener#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#update NetworkLoadBalancerListener#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#create NetworkLoadBalancerListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#delete NetworkLoadBalancerListener#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_listener#update NetworkLoadBalancerListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerListenerTimeoutsOutputReference <a name="NetworkLoadBalancerListenerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerListener } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts">NetworkLoadBalancerListenerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkLoadBalancerListenerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerListener.NetworkLoadBalancerListenerTimeouts">NetworkLoadBalancerListenerTimeouts</a>

---



