# `dataSafeSetUserAssessmentBaselineManagement` Submodule <a name="`dataSafeSetUserAssessmentBaselineManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSetUserAssessmentBaselineManagement <a name="DataSafeSetUserAssessmentBaselineManagement" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management oci_data_safe_set_user_assessment_baseline_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.Initializer"></a>

```typescript
import { dataSafeSetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement(scope: Construct, id: string, config: DataSafeSetUserAssessmentBaselineManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig">DataSafeSetUserAssessmentBaselineManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig">DataSafeSetUserAssessmentBaselineManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeSetUserAssessmentBaselineManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts">DataSafeSetUserAssessmentBaselineManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSetUserAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isConstruct"></a>

```typescript
import { dataSafeSetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isTerraformElement"></a>

```typescript
import { dataSafeSetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isTerraformResource"></a>

```typescript
import { dataSafeSetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.generateConfigForImport"></a>

```typescript
import { dataSafeSetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeSetUserAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSetUserAssessmentBaselineManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSetUserAssessmentBaselineManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSetUserAssessmentBaselineManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.assessmentIds">assessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference">DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts">DataSafeSetUserAssessmentBaselineManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assessmentIds`<sup>Required</sup> <a name="assessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.assessmentIds"></a>

```typescript
public readonly assessmentIds: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference">DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference</a>

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeSetUserAssessmentBaselineManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts">DataSafeSetUserAssessmentBaselineManagementTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSetUserAssessmentBaselineManagementConfig <a name="DataSafeSetUserAssessmentBaselineManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.Initializer"></a>

```typescript
import { dataSafeSetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeSetUserAssessmentBaselineManagementConfig: dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#compartment_id DataSafeSetUserAssessmentBaselineManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#target_id DataSafeSetUserAssessmentBaselineManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#id DataSafeSetUserAssessmentBaselineManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts">DataSafeSetUserAssessmentBaselineManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#compartment_id DataSafeSetUserAssessmentBaselineManagement#compartment_id}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#target_id DataSafeSetUserAssessmentBaselineManagement#target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#id DataSafeSetUserAssessmentBaselineManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSetUserAssessmentBaselineManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts">DataSafeSetUserAssessmentBaselineManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#timeouts DataSafeSetUserAssessmentBaselineManagement#timeouts}

---

### DataSafeSetUserAssessmentBaselineManagementTimeouts <a name="DataSafeSetUserAssessmentBaselineManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts.Initializer"></a>

```typescript
import { dataSafeSetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeSetUserAssessmentBaselineManagementTimeouts: dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#create DataSafeSetUserAssessmentBaselineManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#delete DataSafeSetUserAssessmentBaselineManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#update DataSafeSetUserAssessmentBaselineManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#create DataSafeSetUserAssessmentBaselineManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#delete DataSafeSetUserAssessmentBaselineManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline_management#update DataSafeSetUserAssessmentBaselineManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference <a name="DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeSetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts">DataSafeSetUserAssessmentBaselineManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeSetUserAssessmentBaselineManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaselineManagement.DataSafeSetUserAssessmentBaselineManagementTimeouts">DataSafeSetUserAssessmentBaselineManagementTimeouts</a>

---



