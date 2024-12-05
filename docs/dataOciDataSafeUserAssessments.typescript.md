# `dataOciDataSafeUserAssessments` Submodule <a name="`dataOciDataSafeUserAssessments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessments <a name="DataOciDataSafeUserAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments oci_data_safe_user_assessments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments(scope: Construct, id: string, config: DataOciDataSafeUserAssessmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig">DataOciDataSafeUserAssessmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig">DataOciDataSafeUserAssessmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetIsBaseline">resetIsBaseline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetIsScheduleAssessment">resetIsScheduleAssessment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetScheduleUserAssessmentId">resetScheduleUserAssessmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetTriggeredBy">resetTriggeredBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeUserAssessmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter">DataOciDataSafeUserAssessmentsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsBaseline` <a name="resetIsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetIsBaseline"></a>

```typescript
public resetIsBaseline(): void
```

##### `resetIsScheduleAssessment` <a name="resetIsScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetIsScheduleAssessment"></a>

```typescript
public resetIsScheduleAssessment(): void
```

##### `resetScheduleUserAssessmentId` <a name="resetScheduleUserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetScheduleUserAssessmentId"></a>

```typescript
public resetScheduleUserAssessmentId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

##### `resetTriggeredBy` <a name="resetTriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetTriggeredBy"></a>

```typescript
public resetTriggeredBy(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isConstruct"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isTerraformElement"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeUserAssessments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeUserAssessments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList">DataOciDataSafeUserAssessmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.ignoredTargets">ignoredTargets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList">DataOciDataSafeUserAssessmentsIgnoredTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.userAssessments">userAssessments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList">DataOciDataSafeUserAssessmentsUserAssessmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter">DataOciDataSafeUserAssessmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.isBaselineInput">isBaselineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.isScheduleAssessmentInput">isScheduleAssessmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.scheduleUserAssessmentIdInput">scheduleUserAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.triggeredByInput">triggeredByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.isBaseline">isBaseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.isScheduleAssessment">isScheduleAssessment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.scheduleUserAssessmentId">scheduleUserAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.triggeredBy">triggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeUserAssessmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList">DataOciDataSafeUserAssessmentsFilterList</a>

---

##### `ignoredTargets`<sup>Required</sup> <a name="ignoredTargets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.ignoredTargets"></a>

```typescript
public readonly ignoredTargets: DataOciDataSafeUserAssessmentsIgnoredTargetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList">DataOciDataSafeUserAssessmentsIgnoredTargetsList</a>

---

##### `userAssessments`<sup>Required</sup> <a name="userAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.userAssessments"></a>

```typescript
public readonly userAssessments: DataOciDataSafeUserAssessmentsUserAssessmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList">DataOciDataSafeUserAssessmentsUserAssessmentsList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeUserAssessmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter">DataOciDataSafeUserAssessmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isBaselineInput`<sup>Optional</sup> <a name="isBaselineInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.isBaselineInput"></a>

```typescript
public readonly isBaselineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isScheduleAssessmentInput`<sup>Optional</sup> <a name="isScheduleAssessmentInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.isScheduleAssessmentInput"></a>

```typescript
public readonly isScheduleAssessmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduleUserAssessmentIdInput`<sup>Optional</sup> <a name="scheduleUserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.scheduleUserAssessmentIdInput"></a>

```typescript
public readonly scheduleUserAssessmentIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `triggeredByInput`<sup>Optional</sup> <a name="triggeredByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.triggeredByInput"></a>

```typescript
public readonly triggeredByInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isBaseline`<sup>Required</sup> <a name="isBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.isBaseline"></a>

```typescript
public readonly isBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isScheduleAssessment`<sup>Required</sup> <a name="isScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.isScheduleAssessment"></a>

```typescript
public readonly isScheduleAssessment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduleUserAssessmentId`<sup>Required</sup> <a name="scheduleUserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.scheduleUserAssessmentId"></a>

```typescript
public readonly scheduleUserAssessmentId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

##### `triggeredBy`<sup>Required</sup> <a name="triggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.triggeredBy"></a>

```typescript
public readonly triggeredBy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentsConfig <a name="DataOciDataSafeUserAssessmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentsConfig: dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#compartment_id DataOciDataSafeUserAssessments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#access_level DataOciDataSafeUserAssessments#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#compartment_id_in_subtree DataOciDataSafeUserAssessments#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#display_name DataOciDataSafeUserAssessments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter">DataOciDataSafeUserAssessmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#id DataOciDataSafeUserAssessments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.isBaseline">isBaseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#is_baseline DataOciDataSafeUserAssessments#is_baseline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.isScheduleAssessment">isScheduleAssessment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#is_schedule_assessment DataOciDataSafeUserAssessments#is_schedule_assessment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.scheduleUserAssessmentId">scheduleUserAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#schedule_user_assessment_id DataOciDataSafeUserAssessments#schedule_user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#state DataOciDataSafeUserAssessments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#target_id DataOciDataSafeUserAssessments#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#time_created_greater_than_or_equal_to DataOciDataSafeUserAssessments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#time_created_less_than DataOciDataSafeUserAssessments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.triggeredBy">triggeredBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#triggered_by DataOciDataSafeUserAssessments#triggered_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#type DataOciDataSafeUserAssessments#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#compartment_id DataOciDataSafeUserAssessments#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#access_level DataOciDataSafeUserAssessments#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#compartment_id_in_subtree DataOciDataSafeUserAssessments#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#display_name DataOciDataSafeUserAssessments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeUserAssessmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter">DataOciDataSafeUserAssessmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#filter DataOciDataSafeUserAssessments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#id DataOciDataSafeUserAssessments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isBaseline`<sup>Optional</sup> <a name="isBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.isBaseline"></a>

```typescript
public readonly isBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#is_baseline DataOciDataSafeUserAssessments#is_baseline}.

---

##### `isScheduleAssessment`<sup>Optional</sup> <a name="isScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.isScheduleAssessment"></a>

```typescript
public readonly isScheduleAssessment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#is_schedule_assessment DataOciDataSafeUserAssessments#is_schedule_assessment}.

---

##### `scheduleUserAssessmentId`<sup>Optional</sup> <a name="scheduleUserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.scheduleUserAssessmentId"></a>

```typescript
public readonly scheduleUserAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#schedule_user_assessment_id DataOciDataSafeUserAssessments#schedule_user_assessment_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#state DataOciDataSafeUserAssessments#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#target_id DataOciDataSafeUserAssessments#target_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#time_created_greater_than_or_equal_to DataOciDataSafeUserAssessments#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#time_created_less_than DataOciDataSafeUserAssessments#time_created_less_than}.

---

##### `triggeredBy`<sup>Optional</sup> <a name="triggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.triggeredBy"></a>

```typescript
public readonly triggeredBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#triggered_by DataOciDataSafeUserAssessments#triggered_by}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#type DataOciDataSafeUserAssessments#type}.

---

### DataOciDataSafeUserAssessmentsFilter <a name="DataOciDataSafeUserAssessmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentsFilter: dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#name DataOciDataSafeUserAssessments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#values DataOciDataSafeUserAssessments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#regex DataOciDataSafeUserAssessments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#name DataOciDataSafeUserAssessments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#values DataOciDataSafeUserAssessments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessments#regex DataOciDataSafeUserAssessments#regex}.

---

### DataOciDataSafeUserAssessmentsIgnoredTargets <a name="DataOciDataSafeUserAssessmentsIgnoredTargets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargets.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentsIgnoredTargets: dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargets = { ... }
```


### DataOciDataSafeUserAssessmentsUserAssessments <a name="DataOciDataSafeUserAssessmentsUserAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessments.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentsUserAssessments: dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessments = { ... }
```


### DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets <a name="DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets: dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentsFilterList <a name="DataOciDataSafeUserAssessmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter">DataOciDataSafeUserAssessmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter">DataOciDataSafeUserAssessmentsFilter</a>[]

---


### DataOciDataSafeUserAssessmentsFilterOutputReference <a name="DataOciDataSafeUserAssessmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter">DataOciDataSafeUserAssessmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsFilter">DataOciDataSafeUserAssessmentsFilter</a>

---


### DataOciDataSafeUserAssessmentsIgnoredTargetsList <a name="DataOciDataSafeUserAssessmentsIgnoredTargetsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference <a name="DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargets">DataOciDataSafeUserAssessmentsIgnoredTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeUserAssessmentsIgnoredTargets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsIgnoredTargets">DataOciDataSafeUserAssessmentsIgnoredTargets</a>

---


### DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList <a name="DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference <a name="DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets">DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets">DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargets</a>

---


### DataOciDataSafeUserAssessmentsUserAssessmentsList <a name="DataOciDataSafeUserAssessmentsUserAssessmentsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference <a name="DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.ignoredAssessmentIds">ignoredAssessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.ignoredTargets">ignoredTargets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList">DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.isAssessmentScheduled">isAssessmentScheduled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.isBaseline">isBaseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.isDeviatedFromBaseline">isDeviatedFromBaseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.lastComparedBaselineId">lastComparedBaselineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.scheduleAssessmentId">scheduleAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.statistics">statistics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.timeLastAssessed">timeLastAssessed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.triggeredBy">triggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessments">DataOciDataSafeUserAssessmentsUserAssessments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoredAssessmentIds`<sup>Required</sup> <a name="ignoredAssessmentIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.ignoredAssessmentIds"></a>

```typescript
public readonly ignoredAssessmentIds: string[];
```

- *Type:* string[]

---

##### `ignoredTargets`<sup>Required</sup> <a name="ignoredTargets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.ignoredTargets"></a>

```typescript
public readonly ignoredTargets: DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList">DataOciDataSafeUserAssessmentsUserAssessmentsIgnoredTargetsList</a>

---

##### `isAssessmentScheduled`<sup>Required</sup> <a name="isAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.isAssessmentScheduled"></a>

```typescript
public readonly isAssessmentScheduled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBaseline`<sup>Required</sup> <a name="isBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.isBaseline"></a>

```typescript
public readonly isBaseline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDeviatedFromBaseline`<sup>Required</sup> <a name="isDeviatedFromBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.isDeviatedFromBaseline"></a>

```typescript
public readonly isDeviatedFromBaseline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastComparedBaselineId`<sup>Required</sup> <a name="lastComparedBaselineId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.lastComparedBaselineId"></a>

```typescript
public readonly lastComparedBaselineId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `scheduleAssessmentId`<sup>Required</sup> <a name="scheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.scheduleAssessmentId"></a>

```typescript
public readonly scheduleAssessmentId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.statistics"></a>

```typescript
public readonly statistics: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastAssessed`<sup>Required</sup> <a name="timeLastAssessed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.timeLastAssessed"></a>

```typescript
public readonly timeLastAssessed: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `triggeredBy`<sup>Required</sup> <a name="triggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.triggeredBy"></a>

```typescript
public readonly triggeredBy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeUserAssessmentsUserAssessments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessments.DataOciDataSafeUserAssessmentsUserAssessments">DataOciDataSafeUserAssessmentsUserAssessments</a>

---



