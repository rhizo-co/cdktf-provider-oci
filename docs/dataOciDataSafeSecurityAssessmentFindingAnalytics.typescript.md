# `dataOciDataSafeSecurityAssessmentFindingAnalytics` Submodule <a name="`dataOciDataSafeSecurityAssessmentFindingAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentFindingAnalytics <a name="DataOciDataSafeSecurityAssessmentFindingAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics oci_data_safe_security_assessment_finding_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig">DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig">DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetFindingKey">resetFindingKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetIsTopFinding">resetIsTopFinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetTopFindingStatus">resetTopFindingStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFindingKey` <a name="resetFindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetFindingKey"></a>

```typescript
public resetFindingKey(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsTopFinding` <a name="resetIsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetIsTopFinding"></a>

```typescript
public resetIsTopFinding(): void
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetTopFindingStatus` <a name="resetTopFindingStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetTopFindingStatus"></a>

```typescript
public resetTopFindingStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindingAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isConstruct"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindingAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFindingAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityAssessmentFindingAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFindingAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingAnalyticsCollection">findingAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingKeyInput">findingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.groupByInput">groupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.isTopFindingInput">isTopFindingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.topFindingStatusInput">topFindingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingKey">findingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.groupBy">groupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.isTopFinding">isTopFinding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.topFindingStatus">topFindingStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList</a>

---

##### `findingAnalyticsCollection`<sup>Required</sup> <a name="findingAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingAnalyticsCollection"></a>

```typescript
public readonly findingAnalyticsCollection: DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>[]

---

##### `findingKeyInput`<sup>Optional</sup> <a name="findingKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingKeyInput"></a>

```typescript
public readonly findingKeyInput: string;
```

- *Type:* string

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.groupByInput"></a>

```typescript
public readonly groupByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isTopFindingInput`<sup>Optional</sup> <a name="isTopFindingInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.isTopFindingInput"></a>

```typescript
public readonly isTopFindingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `topFindingStatusInput`<sup>Optional</sup> <a name="topFindingStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.topFindingStatusInput"></a>

```typescript
public readonly topFindingStatusInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `findingKey`<sup>Required</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingKey"></a>

```typescript
public readonly findingKey: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isTopFinding`<sup>Required</sup> <a name="isTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.isTopFinding"></a>

```typescript
public readonly isTopFinding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `topFindingStatus`<sup>Required</sup> <a name="topFindingStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.topFindingStatus"></a>

```typescript
public readonly topFindingStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentFindingAnalyticsConfig: dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#access_level DataOciDataSafeSecurityAssessmentFindingAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.findingKey">findingKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#finding_key DataOciDataSafeSecurityAssessmentFindingAnalytics#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.groupBy">groupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#group_by DataOciDataSafeSecurityAssessmentFindingAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#id DataOciDataSafeSecurityAssessmentFindingAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.isTopFinding">isTopFinding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#is_top_finding DataOciDataSafeSecurityAssessmentFindingAnalytics#is_top_finding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.severity">severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#severity DataOciDataSafeSecurityAssessmentFindingAnalytics#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.topFindingStatus">topFindingStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#top_finding_status DataOciDataSafeSecurityAssessmentFindingAnalytics#top_finding_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#access_level DataOciDataSafeSecurityAssessmentFindingAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#filter DataOciDataSafeSecurityAssessmentFindingAnalytics#filter}

---

##### `findingKey`<sup>Optional</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.findingKey"></a>

```typescript
public readonly findingKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#finding_key DataOciDataSafeSecurityAssessmentFindingAnalytics#finding_key}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#group_by DataOciDataSafeSecurityAssessmentFindingAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#id DataOciDataSafeSecurityAssessmentFindingAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTopFinding`<sup>Optional</sup> <a name="isTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.isTopFinding"></a>

```typescript
public readonly isTopFinding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#is_top_finding DataOciDataSafeSecurityAssessmentFindingAnalytics#is_top_finding}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#severity DataOciDataSafeSecurityAssessmentFindingAnalytics#severity}.

---

##### `topFindingStatus`<sup>Optional</sup> <a name="topFindingStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.topFindingStatus"></a>

```typescript
public readonly topFindingStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#top_finding_status DataOciDataSafeSecurityAssessmentFindingAnalytics#top_finding_status}.

---

### DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentFindingAnalyticsFilter: dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#name DataOciDataSafeSecurityAssessmentFindingAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#values DataOciDataSafeSecurityAssessmentFindingAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#regex DataOciDataSafeSecurityAssessmentFindingAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#name DataOciDataSafeSecurityAssessmentFindingAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#values DataOciDataSafeSecurityAssessmentFindingAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#regex DataOciDataSafeSecurityAssessmentFindingAnalytics#regex}.

---

### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection: dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection = { ... }
```


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems: dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems = { ... }
```


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions: dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>[]

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.topFindingCategory">topFindingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.topFindingStatus">topFindingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `topFindingCategory`<sup>Required</sup> <a name="topFindingCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.topFindingCategory"></a>

```typescript
public readonly topFindingCategory: string;
```

- *Type:* string

---

##### `topFindingStatus`<sup>Required</sup> <a name="topFindingStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.topFindingStatus"></a>

```typescript
public readonly topFindingStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.securityAssessmentFindingAnalyticCount">securityAssessmentFindingAnalyticCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `securityAssessmentFindingAnalyticCount`<sup>Required</sup> <a name="securityAssessmentFindingAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.securityAssessmentFindingAnalyticCount"></a>

```typescript
public readonly securityAssessmentFindingAnalyticCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems</a>

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFindingAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection</a>

---



