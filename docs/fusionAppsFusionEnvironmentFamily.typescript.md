# `fusionAppsFusionEnvironmentFamily` Submodule <a name="`fusionAppsFusionEnvironmentFamily` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentFamily <a name="FusionAppsFusionEnvironmentFamily" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family oci_fusion_apps_fusion_environment_family}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily(scope: Construct, id: string, config: FusionAppsFusionEnvironmentFamilyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig">FusionAppsFusionEnvironmentFamilyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig">FusionAppsFusionEnvironmentFamilyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy">putFamilyMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFamilyMaintenancePolicy">resetFamilyMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeUpdated">resetTimeUpdated</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFamilyMaintenancePolicy` <a name="putFamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy"></a>

```typescript
public putFamilyMaintenancePolicy(value: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts"></a>

```typescript
public putTimeouts(value: FusionAppsFusionEnvironmentFamilyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFamilyMaintenancePolicy` <a name="resetFamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFamilyMaintenancePolicy"></a>

```typescript
public resetFamilyMaintenancePolicy(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeUpdated` <a name="resetTimeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeUpdated"></a>

```typescript
public resetTimeUpdated(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentFamily resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentFamily resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FusionAppsFusionEnvironmentFamily to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FusionAppsFusionEnvironmentFamily that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentFamily to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicy">familyMaintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.isSubscriptionUpdateNeeded">isSubscriptionUpdateNeeded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.systemName">systemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference">FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicyInput">familyMaintenancePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIdsInput">subscriptionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdatedInput">timeUpdatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIds">subscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `familyMaintenancePolicy`<sup>Required</sup> <a name="familyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicy"></a>

```typescript
public readonly familyMaintenancePolicy: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference</a>

---

##### `isSubscriptionUpdateNeeded`<sup>Required</sup> <a name="isSubscriptionUpdateNeeded" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.isSubscriptionUpdateNeeded"></a>

```typescript
public readonly isSubscriptionUpdateNeeded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemName`<sup>Required</sup> <a name="systemName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.systemName"></a>

```typescript
public readonly systemName: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeouts"></a>

```typescript
public readonly timeouts: FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference">FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `familyMaintenancePolicyInput`<sup>Optional</sup> <a name="familyMaintenancePolicyInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicyInput"></a>

```typescript
public readonly familyMaintenancePolicyInput: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subscriptionIdsInput`<sup>Optional</sup> <a name="subscriptionIdsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIdsInput"></a>

```typescript
public readonly subscriptionIdsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FusionAppsFusionEnvironmentFamilyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

---

##### `timeUpdatedInput`<sup>Optional</sup> <a name="timeUpdatedInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdatedInput"></a>

```typescript
public readonly timeUpdatedInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIds"></a>

```typescript
public readonly subscriptionIds: string[];
```

- *Type:* string[]

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentFamilyConfig <a name="FusionAppsFusionEnvironmentFamilyConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentFamilyConfig: fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.subscriptionIds">subscriptionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.familyMaintenancePolicy">familyMaintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | family_maintenance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}.

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.subscriptionIds"></a>

```typescript
public readonly subscriptionIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}.

---

##### `familyMaintenancePolicy`<sup>Optional</sup> <a name="familyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.familyMaintenancePolicy"></a>

```typescript
public readonly familyMaintenancePolicy: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

family_maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#family_maintenance_policy FusionAppsFusionEnvironmentFamily#family_maintenance_policy}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FusionAppsFusionEnvironmentFamilyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#timeouts FusionAppsFusionEnvironmentFamily#timeouts}

---

##### `timeUpdated`<sup>Optional</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}.

---

### FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy <a name="FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy: fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.concurrentMaintenance">concurrentMaintenance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#concurrent_maintenance FusionAppsFusionEnvironmentFamily#concurrent_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#is_monthly_patching_enabled FusionAppsFusionEnvironmentFamily#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.quarterlyUpgradeBeginTimes">quarterlyUpgradeBeginTimes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#quarterly_upgrade_begin_times FusionAppsFusionEnvironmentFamily#quarterly_upgrade_begin_times}. |

---

##### `concurrentMaintenance`<sup>Optional</sup> <a name="concurrentMaintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.concurrentMaintenance"></a>

```typescript
public readonly concurrentMaintenance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#concurrent_maintenance FusionAppsFusionEnvironmentFamily#concurrent_maintenance}.

---

##### `isMonthlyPatchingEnabled`<sup>Optional</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#is_monthly_patching_enabled FusionAppsFusionEnvironmentFamily#is_monthly_patching_enabled}.

---

##### `quarterlyUpgradeBeginTimes`<sup>Optional</sup> <a name="quarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.quarterlyUpgradeBeginTimes"></a>

```typescript
public readonly quarterlyUpgradeBeginTimes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#quarterly_upgrade_begin_times FusionAppsFusionEnvironmentFamily#quarterly_upgrade_begin_times}.

---

### FusionAppsFusionEnvironmentFamilyTimeouts <a name="FusionAppsFusionEnvironmentFamilyTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentFamilyTimeouts: fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#create FusionAppsFusionEnvironmentFamily#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#delete FusionAppsFusionEnvironmentFamily#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#update FusionAppsFusionEnvironmentFamily#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#create FusionAppsFusionEnvironmentFamily#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#delete FusionAppsFusionEnvironmentFamily#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#update FusionAppsFusionEnvironmentFamily#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference <a name="FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetConcurrentMaintenance">resetConcurrentMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetIsMonthlyPatchingEnabled">resetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetQuarterlyUpgradeBeginTimes">resetQuarterlyUpgradeBeginTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConcurrentMaintenance` <a name="resetConcurrentMaintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetConcurrentMaintenance"></a>

```typescript
public resetConcurrentMaintenance(): void
```

##### `resetIsMonthlyPatchingEnabled` <a name="resetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetIsMonthlyPatchingEnabled"></a>

```typescript
public resetIsMonthlyPatchingEnabled(): void
```

##### `resetQuarterlyUpgradeBeginTimes` <a name="resetQuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetQuarterlyUpgradeBeginTimes"></a>

```typescript
public resetQuarterlyUpgradeBeginTimes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenanceInput">concurrentMaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabledInput">isMonthlyPatchingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimesInput">quarterlyUpgradeBeginTimesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance">concurrentMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">quarterlyUpgradeBeginTimes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `concurrentMaintenanceInput`<sup>Optional</sup> <a name="concurrentMaintenanceInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenanceInput"></a>

```typescript
public readonly concurrentMaintenanceInput: string;
```

- *Type:* string

---

##### `isMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="isMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```typescript
public readonly isMonthlyPatchingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `quarterlyUpgradeBeginTimesInput`<sup>Optional</sup> <a name="quarterlyUpgradeBeginTimesInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimesInput"></a>

```typescript
public readonly quarterlyUpgradeBeginTimesInput: string;
```

- *Type:* string

---

##### `concurrentMaintenance`<sup>Required</sup> <a name="concurrentMaintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance"></a>

```typescript
public readonly concurrentMaintenance: string;
```

- *Type:* string

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `quarterlyUpgradeBeginTimes`<sup>Required</sup> <a name="quarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```typescript
public readonly quarterlyUpgradeBeginTimes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

---


### FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentFamily } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FusionAppsFusionEnvironmentFamilyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

---



