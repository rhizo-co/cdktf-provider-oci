# `dataOciDataSafeUserAssessmentProfileAnalytics` Submodule <a name="`dataOciDataSafeUserAssessmentProfileAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentProfileAnalytics <a name="DataOciDataSafeUserAssessmentProfileAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics oci_data_safe_user_assessment_profile_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics(scope: Construct, id: string, config: DataOciDataSafeUserAssessmentProfileAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig">DataOciDataSafeUserAssessmentProfileAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig">DataOciDataSafeUserAssessmentProfileAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetProfileName">resetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeUserAssessmentProfileAnalyticsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter">DataOciDataSafeUserAssessmentProfileAnalyticsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProfileName` <a name="resetProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetProfileName"></a>

```typescript
public resetProfileName(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfileAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isConstruct"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformElement"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfileAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentProfileAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeUserAssessmentProfileAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentProfileAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList">DataOciDataSafeUserAssessmentProfileAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileAggregations">profileAggregations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList">DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter">DataOciDataSafeUserAssessmentProfileAnalyticsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.userAssessmentIdInput">userAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeUserAssessmentProfileAnalyticsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList">DataOciDataSafeUserAssessmentProfileAnalyticsFilterList</a>

---

##### `profileAggregations`<sup>Required</sup> <a name="profileAggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileAggregations"></a>

```typescript
public readonly profileAggregations: DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList">DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeUserAssessmentProfileAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter">DataOciDataSafeUserAssessmentProfileAnalyticsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `userAssessmentIdInput`<sup>Optional</sup> <a name="userAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.userAssessmentIdInput"></a>

```typescript
public readonly userAssessmentIdInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentProfileAnalyticsConfig <a name="DataOciDataSafeUserAssessmentProfileAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentProfileAnalyticsConfig: dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#compartment_id DataOciDataSafeUserAssessmentProfileAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#user_assessment_id DataOciDataSafeUserAssessmentProfileAnalytics#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#access_level DataOciDataSafeUserAssessmentProfileAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfileAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter">DataOciDataSafeUserAssessmentProfileAnalyticsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#id DataOciDataSafeUserAssessmentProfileAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#profile_name DataOciDataSafeUserAssessmentProfileAnalytics#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#target_id DataOciDataSafeUserAssessmentProfileAnalytics#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#compartment_id DataOciDataSafeUserAssessmentProfileAnalytics#compartment_id}.

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#user_assessment_id DataOciDataSafeUserAssessmentProfileAnalytics#user_assessment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#access_level DataOciDataSafeUserAssessmentProfileAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfileAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeUserAssessmentProfileAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter">DataOciDataSafeUserAssessmentProfileAnalyticsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#filter DataOciDataSafeUserAssessmentProfileAnalytics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#id DataOciDataSafeUserAssessmentProfileAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `profileName`<sup>Optional</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#profile_name DataOciDataSafeUserAssessmentProfileAnalytics#profile_name}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#target_id DataOciDataSafeUserAssessmentProfileAnalytics#target_id}.

---

### DataOciDataSafeUserAssessmentProfileAnalyticsFilter <a name="DataOciDataSafeUserAssessmentProfileAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentProfileAnalyticsFilter: dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#name DataOciDataSafeUserAssessmentProfileAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#values DataOciDataSafeUserAssessmentProfileAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#regex DataOciDataSafeUserAssessmentProfileAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#name DataOciDataSafeUserAssessmentProfileAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#values DataOciDataSafeUserAssessmentProfileAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#regex DataOciDataSafeUserAssessmentProfileAnalytics#regex}.

---

### DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations <a name="DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations: dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentProfileAnalyticsFilterList <a name="DataOciDataSafeUserAssessmentProfileAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter">DataOciDataSafeUserAssessmentProfileAnalyticsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentProfileAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter">DataOciDataSafeUserAssessmentProfileAnalyticsFilter</a>[]

---


### DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference <a name="DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter">DataOciDataSafeUserAssessmentProfileAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeUserAssessmentProfileAnalyticsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter">DataOciDataSafeUserAssessmentProfileAnalyticsFilter</a>

---


### DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList <a name="DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference <a name="DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeUserAssessmentProfileAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.items">items</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations">DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.items"></a>

```typescript
public readonly items: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations">DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations</a>

---



