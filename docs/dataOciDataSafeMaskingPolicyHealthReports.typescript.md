# `dataOciDataSafeMaskingPolicyHealthReports` Submodule <a name="`dataOciDataSafeMaskingPolicyHealthReports` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyHealthReports <a name="DataOciDataSafeMaskingPolicyHealthReports" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports oci_data_safe_masking_policy_health_reports}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports(scope: Construct, id: string, config: DataOciDataSafeMaskingPolicyHealthReportsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig">DataOciDataSafeMaskingPolicyHealthReportsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig">DataOciDataSafeMaskingPolicyHealthReportsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyHealthReportId">resetMaskingPolicyHealthReportId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyId">resetMaskingPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeMaskingPolicyHealthReportsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaskingPolicyHealthReportId` <a name="resetMaskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyHealthReportId"></a>

```typescript
public resetMaskingPolicyHealthReportId(): void
```

##### `resetMaskingPolicyId` <a name="resetMaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyId"></a>

```typescript
public resetMaskingPolicyId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReports resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReports resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyHealthReports to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingPolicyHealthReports that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyHealthReports to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList">DataOciDataSafeMaskingPolicyHealthReportsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportCollection">maskingPolicyHealthReportCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportIdInput">maskingPolicyHealthReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyIdInput">maskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportId">maskingPolicyHealthReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeMaskingPolicyHealthReportsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList">DataOciDataSafeMaskingPolicyHealthReportsFilterList</a>

---

##### `maskingPolicyHealthReportCollection`<sup>Required</sup> <a name="maskingPolicyHealthReportCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportCollection"></a>

```typescript
public readonly maskingPolicyHealthReportCollection: DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeMaskingPolicyHealthReportsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingPolicyHealthReportIdInput`<sup>Optional</sup> <a name="maskingPolicyHealthReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportIdInput"></a>

```typescript
public readonly maskingPolicyHealthReportIdInput: string;
```

- *Type:* string

---

##### `maskingPolicyIdInput`<sup>Optional</sup> <a name="maskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyIdInput"></a>

```typescript
public readonly maskingPolicyIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingPolicyHealthReportId`<sup>Required</sup> <a name="maskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportId"></a>

```typescript
public readonly maskingPolicyHealthReportId: string;
```

- *Type:* string

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyHealthReportsConfig <a name="DataOciDataSafeMaskingPolicyHealthReportsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyHealthReportsConfig: dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id DataOciDataSafeMaskingPolicyHealthReports#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#access_level DataOciDataSafeMaskingPolicyHealthReports#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id_in_subtree DataOciDataSafeMaskingPolicyHealthReports#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#display_name DataOciDataSafeMaskingPolicyHealthReports#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#id DataOciDataSafeMaskingPolicyHealthReports#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyHealthReportId">maskingPolicyHealthReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#state DataOciDataSafeMaskingPolicyHealthReports#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#target_id DataOciDataSafeMaskingPolicyHealthReports#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id DataOciDataSafeMaskingPolicyHealthReports#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#access_level DataOciDataSafeMaskingPolicyHealthReports#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id_in_subtree DataOciDataSafeMaskingPolicyHealthReports#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#display_name DataOciDataSafeMaskingPolicyHealthReports#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeMaskingPolicyHealthReportsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#filter DataOciDataSafeMaskingPolicyHealthReports#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#id DataOciDataSafeMaskingPolicyHealthReports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maskingPolicyHealthReportId`<sup>Optional</sup> <a name="maskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyHealthReportId"></a>

```typescript
public readonly maskingPolicyHealthReportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_health_report_id}.

---

##### `maskingPolicyId`<sup>Optional</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#state DataOciDataSafeMaskingPolicyHealthReports#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#target_id DataOciDataSafeMaskingPolicyHealthReports#target_id}.

---

### DataOciDataSafeMaskingPolicyHealthReportsFilter <a name="DataOciDataSafeMaskingPolicyHealthReportsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyHealthReportsFilter: dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#name DataOciDataSafeMaskingPolicyHealthReports#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#values DataOciDataSafeMaskingPolicyHealthReports#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#regex DataOciDataSafeMaskingPolicyHealthReports#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#name DataOciDataSafeMaskingPolicyHealthReports#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#values DataOciDataSafeMaskingPolicyHealthReports#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#regex DataOciDataSafeMaskingPolicyHealthReports#regex}.

---

### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection: dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection = { ... }
```


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems: dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyHealthReportsFilterList <a name="DataOciDataSafeMaskingPolicyHealthReportsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeMaskingPolicyHealthReportsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>[]

---


### DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeMaskingPolicyHealthReportsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReports } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection</a>

---



