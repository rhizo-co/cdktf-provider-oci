# `dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics` Submodule <a name="`dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics oci_data_safe_security_assessment_security_feature_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isConstruct"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.securityFeatureAnalyticsCollection">securityFeatureAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList</a>

---

##### `securityFeatureAnalyticsCollection`<sup>Required</sup> <a name="securityFeatureAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.securityFeatureAnalyticsCollection"></a>

```typescript
public readonly securityFeatureAnalyticsCollection: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig: dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#access_level DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#target_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#access_level DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#filter DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#target_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#target_id}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter: dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#name DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#values DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#regex DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#name DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#values DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#regex DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#regex}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection: dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection = { ... }
```


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems: dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems = { ... }
```


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions: dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>[]

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.securityFeature">securityFeature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityFeature`<sup>Required</sup> <a name="securityFeature" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.securityFeature"></a>

```typescript
public readonly securityFeature: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.securityAssessmentSecurityFeatureAnalyticCount">securityAssessmentSecurityFeatureAnalyticCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `securityAssessmentSecurityFeatureAnalyticCount`<sup>Required</sup> <a name="securityAssessmentSecurityFeatureAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.securityAssessmentSecurityFeatureAnalyticCount"></a>

```typescript
public readonly securityAssessmentSecurityFeatureAnalyticCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems</a>

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection</a>

---



