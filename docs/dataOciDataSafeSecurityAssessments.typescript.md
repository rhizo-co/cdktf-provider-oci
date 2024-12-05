# `dataOciDataSafeSecurityAssessments` Submodule <a name="`dataOciDataSafeSecurityAssessments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessments <a name="DataOciDataSafeSecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments oci_data_safe_security_assessments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig">DataOciDataSafeSecurityAssessmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig">DataOciDataSafeSecurityAssessmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsBaseline">resetIsBaseline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsScheduleAssessment">resetIsScheduleAssessment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetScheduleAssessmentId">resetScheduleAssessmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTriggeredBy">resetTriggeredBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSecurityAssessmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsBaseline` <a name="resetIsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsBaseline"></a>

```typescript
public resetIsBaseline(): void
```

##### `resetIsScheduleAssessment` <a name="resetIsScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsScheduleAssessment"></a>

```typescript
public resetIsScheduleAssessment(): void
```

##### `resetScheduleAssessmentId` <a name="resetScheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetScheduleAssessmentId"></a>

```typescript
public resetScheduleAssessmentId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

##### `resetTriggeredBy` <a name="resetTriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTriggeredBy"></a>

```typescript
public resetTriggeredBy(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityAssessments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList">DataOciDataSafeSecurityAssessmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.securityAssessments">securityAssessments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaselineInput">isBaselineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessmentInput">isScheduleAssessmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentIdInput">scheduleAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredByInput">triggeredByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaseline">isBaseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessment">isScheduleAssessment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentId">scheduleAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredBy">triggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSecurityAssessmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList">DataOciDataSafeSecurityAssessmentsFilterList</a>

---

##### `securityAssessments`<sup>Required</sup> <a name="securityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.securityAssessments"></a>

```typescript
public readonly securityAssessments: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSecurityAssessmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isBaselineInput`<sup>Optional</sup> <a name="isBaselineInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaselineInput"></a>

```typescript
public readonly isBaselineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isScheduleAssessmentInput`<sup>Optional</sup> <a name="isScheduleAssessmentInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessmentInput"></a>

```typescript
public readonly isScheduleAssessmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduleAssessmentIdInput`<sup>Optional</sup> <a name="scheduleAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentIdInput"></a>

```typescript
public readonly scheduleAssessmentIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `triggeredByInput`<sup>Optional</sup> <a name="triggeredByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredByInput"></a>

```typescript
public readonly triggeredByInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isBaseline`<sup>Required</sup> <a name="isBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaseline"></a>

```typescript
public readonly isBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isScheduleAssessment`<sup>Required</sup> <a name="isScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessment"></a>

```typescript
public readonly isScheduleAssessment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduleAssessmentId`<sup>Required</sup> <a name="scheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentId"></a>

```typescript
public readonly scheduleAssessmentId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

##### `triggeredBy`<sup>Required</sup> <a name="triggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredBy"></a>

```typescript
public readonly triggeredBy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentsConfig <a name="DataOciDataSafeSecurityAssessmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsConfig: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isBaseline">isBaseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isScheduleAssessment">isScheduleAssessment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.scheduleAssessmentId">scheduleAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.triggeredBy">triggeredBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSecurityAssessmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#filter DataOciDataSafeSecurityAssessments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isBaseline`<sup>Optional</sup> <a name="isBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isBaseline"></a>

```typescript
public readonly isBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}.

---

##### `isScheduleAssessment`<sup>Optional</sup> <a name="isScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isScheduleAssessment"></a>

```typescript
public readonly isScheduleAssessment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}.

---

##### `scheduleAssessmentId`<sup>Optional</sup> <a name="scheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.scheduleAssessmentId"></a>

```typescript
public readonly scheduleAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}.

---

##### `triggeredBy`<sup>Optional</sup> <a name="triggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.triggeredBy"></a>

```typescript
public readonly triggeredBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}.

---

### DataOciDataSafeSecurityAssessmentsFilter <a name="DataOciDataSafeSecurityAssessmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsFilter: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#name DataOciDataSafeSecurityAssessments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#values DataOciDataSafeSecurityAssessments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#regex DataOciDataSafeSecurityAssessments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#name DataOciDataSafeSecurityAssessments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#values DataOciDataSafeSecurityAssessments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#regex DataOciDataSafeSecurityAssessments#regex}.

---

### DataOciDataSafeSecurityAssessmentsSecurityAssessments <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsSecurityAssessments: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments = { ... }
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics = { ... }
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory = { ... }
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred = { ... }
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate = { ... }
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk = { ... }
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk = { ... }
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk = { ... }
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass: dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentsFilterList <a name="DataOciDataSafeSecurityAssessmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>[]

---


### DataOciDataSafeSecurityAssessmentsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredAssessmentIds">ignoredAssessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredTargets">ignoredTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isAssessmentScheduled">isAssessmentScheduled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isBaseline">isBaseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isDeviatedFromBaseline">isDeviatedFromBaseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lastComparedBaselineId">lastComparedBaselineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.scheduleSecurityAssessmentId">scheduleSecurityAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.statistics">statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeLastAssessed">timeLastAssessed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.triggeredBy">triggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments">DataOciDataSafeSecurityAssessmentsSecurityAssessments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoredAssessmentIds`<sup>Required</sup> <a name="ignoredAssessmentIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredAssessmentIds"></a>

```typescript
public readonly ignoredAssessmentIds: string[];
```

- *Type:* string[]

---

##### `ignoredTargets`<sup>Required</sup> <a name="ignoredTargets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredTargets"></a>

```typescript
public readonly ignoredTargets: string[];
```

- *Type:* string[]

---

##### `isAssessmentScheduled`<sup>Required</sup> <a name="isAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isAssessmentScheduled"></a>

```typescript
public readonly isAssessmentScheduled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBaseline`<sup>Required</sup> <a name="isBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isBaseline"></a>

```typescript
public readonly isBaseline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDeviatedFromBaseline`<sup>Required</sup> <a name="isDeviatedFromBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isDeviatedFromBaseline"></a>

```typescript
public readonly isDeviatedFromBaseline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastComparedBaselineId`<sup>Required</sup> <a name="lastComparedBaselineId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lastComparedBaselineId"></a>

```typescript
public readonly lastComparedBaselineId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `scheduleSecurityAssessmentId`<sup>Required</sup> <a name="scheduleSecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.scheduleSecurityAssessmentId"></a>

```typescript
public readonly scheduleSecurityAssessmentId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.statistics"></a>

```typescript
public readonly statistics: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastAssessed`<sup>Required</sup> <a name="timeLastAssessed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeLastAssessed"></a>

```typescript
public readonly timeLastAssessed: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `triggeredBy`<sup>Required</sup> <a name="triggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.triggeredBy"></a>

```typescript
public readonly triggeredBy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentsSecurityAssessments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments">DataOciDataSafeSecurityAssessmentsSecurityAssessments</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.advisory">advisory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.deferred">deferred</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.highRisk">highRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.lowRisk">lowRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.mediumRisk">mediumRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.pass">pass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advisory`<sup>Required</sup> <a name="advisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.advisory"></a>

```typescript
public readonly advisory: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList</a>

---

##### `deferred`<sup>Required</sup> <a name="deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.deferred"></a>

```typescript
public readonly deferred: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList</a>

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList</a>

---

##### `highRisk`<sup>Required</sup> <a name="highRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.highRisk"></a>

```typescript
public readonly highRisk: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList</a>

---

##### `lowRisk`<sup>Required</sup> <a name="lowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.lowRisk"></a>

```typescript
public readonly lowRisk: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList</a>

---

##### `mediumRisk`<sup>Required</sup> <a name="mediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.mediumRisk"></a>

```typescript
public readonly mediumRisk: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList</a>

---

##### `pass`<sup>Required</sup> <a name="pass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.pass"></a>

```typescript
public readonly pass: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList</a>

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessments } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass</a>

---



