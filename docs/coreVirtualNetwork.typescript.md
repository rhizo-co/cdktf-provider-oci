# `coreVirtualNetwork` Submodule <a name="`coreVirtualNetwork` Submodule" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVirtualNetwork <a name="CoreVirtualNetwork" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network oci_core_virtual_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

new coreVirtualNetwork.CoreVirtualNetwork(scope: Construct, id: string, config: CoreVirtualNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig">CoreVirtualNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig">CoreVirtualNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails">putByoipv6CidrDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetByoipv6CidrDetails">resetByoipv6CidrDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDnsLabel">resetDnsLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIpv6PrivateCidrBlocks">resetIpv6PrivateCidrBlocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsIpv6Enabled">resetIsIpv6Enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsOracleGuaAllocationEnabled">resetIsOracleGuaAllocationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putByoipv6CidrDetails` <a name="putByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails"></a>

```typescript
public putByoipv6CidrDetails(value: IResolvable | CoreVirtualNetworkByoipv6CidrDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreVirtualNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

---

##### `resetByoipv6CidrDetails` <a name="resetByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetByoipv6CidrDetails"></a>

```typescript
public resetByoipv6CidrDetails(): void
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDnsLabel` <a name="resetDnsLabel" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDnsLabel"></a>

```typescript
public resetDnsLabel(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6PrivateCidrBlocks` <a name="resetIpv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIpv6PrivateCidrBlocks"></a>

```typescript
public resetIpv6PrivateCidrBlocks(): void
```

##### `resetIsIpv6Enabled` <a name="resetIsIpv6Enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsIpv6Enabled"></a>

```typescript
public resetIsIpv6Enabled(): void
```

##### `resetIsOracleGuaAllocationEnabled` <a name="resetIsOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsOracleGuaAllocationEnabled"></a>

```typescript
public resetIsOracleGuaAllocationEnabled(): void
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetSecurityAttributes"></a>

```typescript
public resetSecurityAttributes(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

coreVirtualNetwork.CoreVirtualNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreVirtualNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrBlocks">byoipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetails">byoipv6CidrDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList">CoreVirtualNetworkByoipv6CidrDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultDhcpOptionsId">defaultDhcpOptionsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultRouteTableId">defaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultSecurityListId">defaultSecurityListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference">CoreVirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.vcnDomainName">vcnDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetailsInput">byoipv6CidrDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabelInput">dnsLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocksInput">ipv6PrivateCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6EnabledInput">isIpv6EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabledInput">isOracleGuaAllocationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributesInput">securityAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabel">dnsLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocks">ipv6PrivateCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6Enabled">isIpv6Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabled">isOracleGuaAllocationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `byoipv6CidrBlocks`<sup>Required</sup> <a name="byoipv6CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrBlocks"></a>

```typescript
public readonly byoipv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `byoipv6CidrDetails`<sup>Required</sup> <a name="byoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetails"></a>

```typescript
public readonly byoipv6CidrDetails: CoreVirtualNetworkByoipv6CidrDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList">CoreVirtualNetworkByoipv6CidrDetailsList</a>

---

##### `defaultDhcpOptionsId`<sup>Required</sup> <a name="defaultDhcpOptionsId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultDhcpOptionsId"></a>

```typescript
public readonly defaultDhcpOptionsId: string;
```

- *Type:* string

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultRouteTableId"></a>

```typescript
public readonly defaultRouteTableId: string;
```

- *Type:* string

---

##### `defaultSecurityListId`<sup>Required</sup> <a name="defaultSecurityListId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultSecurityListId"></a>

```typescript
public readonly defaultSecurityListId: string;
```

- *Type:* string

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: CoreVirtualNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference">CoreVirtualNetworkTimeoutsOutputReference</a>

---

##### `vcnDomainName`<sup>Required</sup> <a name="vcnDomainName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.vcnDomainName"></a>

```typescript
public readonly vcnDomainName: string;
```

- *Type:* string

---

##### `byoipv6CidrDetailsInput`<sup>Optional</sup> <a name="byoipv6CidrDetailsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetailsInput"></a>

```typescript
public readonly byoipv6CidrDetailsInput: IResolvable | CoreVirtualNetworkByoipv6CidrDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>[]

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dnsLabelInput`<sup>Optional</sup> <a name="dnsLabelInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabelInput"></a>

```typescript
public readonly dnsLabelInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6PrivateCidrBlocksInput`<sup>Optional</sup> <a name="ipv6PrivateCidrBlocksInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocksInput"></a>

```typescript
public readonly ipv6PrivateCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `isIpv6EnabledInput`<sup>Optional</sup> <a name="isIpv6EnabledInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6EnabledInput"></a>

```typescript
public readonly isIpv6EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isOracleGuaAllocationEnabledInput`<sup>Optional</sup> <a name="isOracleGuaAllocationEnabledInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabledInput"></a>

```typescript
public readonly isOracleGuaAllocationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributesInput"></a>

```typescript
public readonly securityAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreVirtualNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsLabel`<sup>Required</sup> <a name="dnsLabel" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabel"></a>

```typescript
public readonly dnsLabel: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6PrivateCidrBlocks`<sup>Required</sup> <a name="ipv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocks"></a>

```typescript
public readonly ipv6PrivateCidrBlocks: string[];
```

- *Type:* string[]

---

##### `isIpv6Enabled`<sup>Required</sup> <a name="isIpv6Enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6Enabled"></a>

```typescript
public readonly isIpv6Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isOracleGuaAllocationEnabled`<sup>Required</sup> <a name="isOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabled"></a>

```typescript
public readonly isOracleGuaAllocationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVirtualNetworkByoipv6CidrDetails <a name="CoreVirtualNetworkByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.Initializer"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

const coreVirtualNetworkByoipv6CidrDetails: coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.byoipv6RangeId">byoipv6RangeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6range_id CoreVirtualNetwork#byoipv6range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6cidr_block CoreVirtualNetwork#ipv6cidr_block}. |

---

##### `byoipv6RangeId`<sup>Required</sup> <a name="byoipv6RangeId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.byoipv6RangeId"></a>

```typescript
public readonly byoipv6RangeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6range_id CoreVirtualNetwork#byoipv6range_id}.

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6cidr_block CoreVirtualNetwork#ipv6cidr_block}.

---

### CoreVirtualNetworkConfig <a name="CoreVirtualNetworkConfig" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.Initializer"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

const coreVirtualNetworkConfig: coreVirtualNetwork.CoreVirtualNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.byoipv6CidrDetails">byoipv6CidrDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>[]</code> | byoipv6cidr_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dnsLabel">dnsLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.ipv6PrivateCidrBlocks">ipv6PrivateCidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isIpv6Enabled">isIpv6Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isOracleGuaAllocationEnabled">isOracleGuaAllocationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}.

---

##### `byoipv6CidrDetails`<sup>Optional</sup> <a name="byoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.byoipv6CidrDetails"></a>

```typescript
public readonly byoipv6CidrDetails: IResolvable | CoreVirtualNetworkByoipv6CidrDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>[]

byoipv6cidr_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6cidr_details CoreVirtualNetwork#byoipv6cidr_details}

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}.

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}.

---

##### `dnsLabel`<sup>Optional</sup> <a name="dnsLabel" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dnsLabel"></a>

```typescript
public readonly dnsLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6PrivateCidrBlocks`<sup>Optional</sup> <a name="ipv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.ipv6PrivateCidrBlocks"></a>

```typescript
public readonly ipv6PrivateCidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}.

---

##### `isIpv6Enabled`<sup>Optional</sup> <a name="isIpv6Enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isIpv6Enabled"></a>

```typescript
public readonly isIpv6Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}.

---

##### `isOracleGuaAllocationEnabled`<sup>Optional</sup> <a name="isOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isOracleGuaAllocationEnabled"></a>

```typescript
public readonly isOracleGuaAllocationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreVirtualNetworkTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#timeouts CoreVirtualNetwork#timeouts}

---

### CoreVirtualNetworkTimeouts <a name="CoreVirtualNetworkTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.Initializer"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

const coreVirtualNetworkTimeouts: coreVirtualNetwork.CoreVirtualNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#create CoreVirtualNetwork#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#delete CoreVirtualNetwork#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#update CoreVirtualNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#create CoreVirtualNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#delete CoreVirtualNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#update CoreVirtualNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVirtualNetworkByoipv6CidrDetailsList <a name="CoreVirtualNetworkByoipv6CidrDetailsList" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

new coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get"></a>

```typescript
public get(index: number): CoreVirtualNetworkByoipv6CidrDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVirtualNetworkByoipv6CidrDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>[]

---


### CoreVirtualNetworkByoipv6CidrDetailsOutputReference <a name="CoreVirtualNetworkByoipv6CidrDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

new coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeIdInput">byoipv6RangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeId">byoipv6RangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `byoipv6RangeIdInput`<sup>Optional</sup> <a name="byoipv6RangeIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeIdInput"></a>

```typescript
public readonly byoipv6RangeIdInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `byoipv6RangeId`<sup>Required</sup> <a name="byoipv6RangeId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeId"></a>

```typescript
public readonly byoipv6RangeId: string;
```

- *Type:* string

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVirtualNetworkByoipv6CidrDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>

---


### CoreVirtualNetworkTimeoutsOutputReference <a name="CoreVirtualNetworkTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreVirtualNetwork } from 'rhizo-co-terraform-provider-oci'

new coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVirtualNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

---



