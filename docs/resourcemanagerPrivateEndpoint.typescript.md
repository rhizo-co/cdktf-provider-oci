# `resourcemanagerPrivateEndpoint` Submodule <a name="`resourcemanagerPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcemanagerPrivateEndpoint <a name="ResourcemanagerPrivateEndpoint" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint oci_resourcemanager_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer"></a>

```typescript
import { resourcemanagerPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint(scope: Construct, id: string, config: ResourcemanagerPrivateEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig">ResourcemanagerPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig">ResourcemanagerPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDnsZones">resetDnsZones</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetIsUsedWithConfigurationSourceProvider">resetIsUsedWithConfigurationSourceProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetNsgIdList">resetNsgIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourcemanagerPrivateEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDnsZones` <a name="resetDnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDnsZones"></a>

```typescript
public resetDnsZones(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsUsedWithConfigurationSourceProvider` <a name="resetIsUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetIsUsedWithConfigurationSourceProvider"></a>

```typescript
public resetIsUsedWithConfigurationSourceProvider(): void
```

##### `resetNsgIdList` <a name="resetNsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetNsgIdList"></a>

```typescript
public resetNsgIdList(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcemanagerPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct"></a>

```typescript
import { resourcemanagerPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement"></a>

```typescript
import { resourcemanagerPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource"></a>

```typescript
import { resourcemanagerPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport"></a>

```typescript
import { resourcemanagerPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ResourcemanagerPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourcemanagerPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourcemanagerPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourcemanagerPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.sourceIps">sourceIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference">ResourcemanagerPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZonesInput">dnsZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProviderInput">isUsedWithConfigurationSourceProviderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdListInput">nsgIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZones">dnsZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProvider">isUsedWithConfigurationSourceProvider</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdList">nsgIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sourceIps`<sup>Required</sup> <a name="sourceIps" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.sourceIps"></a>

```typescript
public readonly sourceIps: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: ResourcemanagerPrivateEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference">ResourcemanagerPrivateEndpointTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dnsZonesInput`<sup>Optional</sup> <a name="dnsZonesInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZonesInput"></a>

```typescript
public readonly dnsZonesInput: string[];
```

- *Type:* string[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isUsedWithConfigurationSourceProviderInput`<sup>Optional</sup> <a name="isUsedWithConfigurationSourceProviderInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProviderInput"></a>

```typescript
public readonly isUsedWithConfigurationSourceProviderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsgIdListInput`<sup>Optional</sup> <a name="nsgIdListInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdListInput"></a>

```typescript
public readonly nsgIdListInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourcemanagerPrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsZones`<sup>Required</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZones"></a>

```typescript
public readonly dnsZones: string[];
```

- *Type:* string[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isUsedWithConfigurationSourceProvider`<sup>Required</sup> <a name="isUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProvider"></a>

```typescript
public readonly isUsedWithConfigurationSourceProvider: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsgIdList`<sup>Required</sup> <a name="nsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdList"></a>

```typescript
public readonly nsgIdList: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcemanagerPrivateEndpointConfig <a name="ResourcemanagerPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.Initializer"></a>

```typescript
import { resourcemanagerPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const resourcemanagerPrivateEndpointConfig: resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dnsZones">dnsZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.isUsedWithConfigurationSourceProvider">isUsedWithConfigurationSourceProvider</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.nsgIdList">nsgIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}.

---

##### `dnsZones`<sup>Optional</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dnsZones"></a>

```typescript
public readonly dnsZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUsedWithConfigurationSourceProvider`<sup>Optional</sup> <a name="isUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.isUsedWithConfigurationSourceProvider"></a>

```typescript
public readonly isUsedWithConfigurationSourceProvider: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}.

---

##### `nsgIdList`<sup>Optional</sup> <a name="nsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.nsgIdList"></a>

```typescript
public readonly nsgIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourcemanagerPrivateEndpointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#timeouts ResourcemanagerPrivateEndpoint#timeouts}

---

### ResourcemanagerPrivateEndpointTimeouts <a name="ResourcemanagerPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.Initializer"></a>

```typescript
import { resourcemanagerPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const resourcemanagerPrivateEndpointTimeouts: resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#create ResourcemanagerPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#delete ResourcemanagerPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#update ResourcemanagerPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#create ResourcemanagerPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#delete ResourcemanagerPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#update ResourcemanagerPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcemanagerPrivateEndpointTimeoutsOutputReference <a name="ResourcemanagerPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourcemanagerPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourcemanagerPrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

---



