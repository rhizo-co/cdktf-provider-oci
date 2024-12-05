# `dataSafeSetUserAssessmentBaseline` Submodule <a name="`dataSafeSetUserAssessmentBaseline` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSetUserAssessmentBaseline <a name="DataSafeSetUserAssessmentBaseline" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline oci_data_safe_set_user_assessment_baseline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer"></a>

```typescript
import { dataSafeSetUserAssessmentBaseline } from 'rhizo-co-terraform-provider-oci'

new dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline(scope: Construct, id: string, config: DataSafeSetUserAssessmentBaselineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig">DataSafeSetUserAssessmentBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig">DataSafeSetUserAssessmentBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetAssessmentIds">resetAssessmentIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeSetUserAssessmentBaselineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a>

---

##### `resetAssessmentIds` <a name="resetAssessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetAssessmentIds"></a>

```typescript
public resetAssessmentIds(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSetUserAssessmentBaseline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isConstruct"></a>

```typescript
import { dataSafeSetUserAssessmentBaseline } from 'rhizo-co-terraform-provider-oci'

dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformElement"></a>

```typescript
import { dataSafeSetUserAssessmentBaseline } from 'rhizo-co-terraform-provider-oci'

dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformResource"></a>

```typescript
import { dataSafeSetUserAssessmentBaseline } from 'rhizo-co-terraform-provider-oci'

dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport"></a>

```typescript
import { dataSafeSetUserAssessmentBaseline } from 'rhizo-co-terraform-provider-oci'

dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeSetUserAssessmentBaseline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSetUserAssessmentBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSetUserAssessmentBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSetUserAssessmentBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference">DataSafeSetUserAssessmentBaselineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.assessmentIdsInput">assessmentIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.userAssessmentIdInput">userAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.assessmentIds">assessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSetUserAssessmentBaselineTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference">DataSafeSetUserAssessmentBaselineTimeoutsOutputReference</a>

---

##### `assessmentIdsInput`<sup>Optional</sup> <a name="assessmentIdsInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.assessmentIdsInput"></a>

```typescript
public readonly assessmentIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeSetUserAssessmentBaselineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a>

---

##### `userAssessmentIdInput`<sup>Optional</sup> <a name="userAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.userAssessmentIdInput"></a>

```typescript
public readonly userAssessmentIdInput: string;
```

- *Type:* string

---

##### `assessmentIds`<sup>Required</sup> <a name="assessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.assessmentIds"></a>

```typescript
public readonly assessmentIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSetUserAssessmentBaselineConfig <a name="DataSafeSetUserAssessmentBaselineConfig" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.Initializer"></a>

```typescript
import { dataSafeSetUserAssessmentBaseline } from 'rhizo-co-terraform-provider-oci'

const dataSafeSetUserAssessmentBaselineConfig: dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#user_assessment_id DataSafeSetUserAssessmentBaseline#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.assessmentIds">assessmentIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#assessment_ids DataSafeSetUserAssessmentBaseline#assessment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#id DataSafeSetUserAssessmentBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#user_assessment_id DataSafeSetUserAssessmentBaseline#user_assessment_id}.

---

##### `assessmentIds`<sup>Optional</sup> <a name="assessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.assessmentIds"></a>

```typescript
public readonly assessmentIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#assessment_ids DataSafeSetUserAssessmentBaseline#assessment_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#id DataSafeSetUserAssessmentBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSetUserAssessmentBaselineTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#timeouts DataSafeSetUserAssessmentBaseline#timeouts}

---

### DataSafeSetUserAssessmentBaselineTimeouts <a name="DataSafeSetUserAssessmentBaselineTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.Initializer"></a>

```typescript
import { dataSafeSetUserAssessmentBaseline } from 'rhizo-co-terraform-provider-oci'

const dataSafeSetUserAssessmentBaselineTimeouts: dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#create DataSafeSetUserAssessmentBaseline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#delete DataSafeSetUserAssessmentBaseline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#update DataSafeSetUserAssessmentBaseline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#create DataSafeSetUserAssessmentBaseline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#delete DataSafeSetUserAssessmentBaseline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#update DataSafeSetUserAssessmentBaseline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSetUserAssessmentBaselineTimeoutsOutputReference <a name="DataSafeSetUserAssessmentBaselineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeSetUserAssessmentBaseline } from 'rhizo-co-terraform-provider-oci'

new dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeSetUserAssessmentBaselineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a>

---



