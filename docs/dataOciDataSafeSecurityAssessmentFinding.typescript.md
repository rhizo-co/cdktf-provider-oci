# `dataOciDataSafeSecurityAssessmentFinding` Submodule <a name="`dataOciDataSafeSecurityAssessmentFinding` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentFinding <a name="DataOciDataSafeSecurityAssessmentFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding oci_data_safe_security_assessment_finding}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentFindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig">DataOciDataSafeSecurityAssessmentFindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig">DataOciDataSafeSecurityAssessmentFindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFindingKey">resetFindingKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetIsTopFinding">resetIsTopFinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetReferences">resetReferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSecurityAssessmentFindingFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFindingKey` <a name="resetFindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFindingKey"></a>

```typescript
public resetFindingKey(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsTopFinding` <a name="resetIsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetIsTopFinding"></a>

```typescript
public resetIsTopFinding(): void
```

##### `resetReferences` <a name="resetReferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetReferences"></a>

```typescript
public resetReferences(): void
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityAssessmentFinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList">DataOciDataSafeSecurityAssessmentFindingFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findings">findings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList">DataOciDataSafeSecurityAssessmentFindingFindingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKeyInput">findingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFindingInput">isTopFindingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.referencesInput">referencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentIdInput">securityAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKey">findingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFinding">isTopFinding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.references">references</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentId">securityAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSecurityAssessmentFindingFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList">DataOciDataSafeSecurityAssessmentFindingFilterList</a>

---

##### `findings`<sup>Required</sup> <a name="findings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findings"></a>

```typescript
public readonly findings: DataOciDataSafeSecurityAssessmentFindingFindingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList">DataOciDataSafeSecurityAssessmentFindingFindingsList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSecurityAssessmentFindingFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>[]

---

##### `findingKeyInput`<sup>Optional</sup> <a name="findingKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKeyInput"></a>

```typescript
public readonly findingKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isTopFindingInput`<sup>Optional</sup> <a name="isTopFindingInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFindingInput"></a>

```typescript
public readonly isTopFindingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `referencesInput`<sup>Optional</sup> <a name="referencesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.referencesInput"></a>

```typescript
public readonly referencesInput: string;
```

- *Type:* string

---

##### `securityAssessmentIdInput`<sup>Optional</sup> <a name="securityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentIdInput"></a>

```typescript
public readonly securityAssessmentIdInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `findingKey`<sup>Required</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKey"></a>

```typescript
public readonly findingKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isTopFinding`<sup>Required</sup> <a name="isTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFinding"></a>

```typescript
public readonly isTopFinding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `references`<sup>Required</sup> <a name="references" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.references"></a>

```typescript
public readonly references: string;
```

- *Type:* string

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentId"></a>

```typescript
public readonly securityAssessmentId: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentFindingConfig <a name="DataOciDataSafeSecurityAssessmentFindingConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentFindingConfig: dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.securityAssessmentId">securityAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.findingKey">findingKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.isTopFinding">isTopFinding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.references">references</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.severity">severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.securityAssessmentId"></a>

```typescript
public readonly securityAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSecurityAssessmentFindingFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#filter DataOciDataSafeSecurityAssessmentFinding#filter}

---

##### `findingKey`<sup>Optional</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.findingKey"></a>

```typescript
public readonly findingKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTopFinding`<sup>Optional</sup> <a name="isTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.isTopFinding"></a>

```typescript
public readonly isTopFinding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}.

---

##### `references`<sup>Optional</sup> <a name="references" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.references"></a>

```typescript
public readonly references: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}.

---

### DataOciDataSafeSecurityAssessmentFindingFilter <a name="DataOciDataSafeSecurityAssessmentFindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentFindingFilter: dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#name DataOciDataSafeSecurityAssessmentFinding#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#values DataOciDataSafeSecurityAssessmentFinding#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#regex DataOciDataSafeSecurityAssessmentFinding#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#name DataOciDataSafeSecurityAssessmentFinding#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#values DataOciDataSafeSecurityAssessmentFinding#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#regex DataOciDataSafeSecurityAssessmentFinding#regex}.

---

### DataOciDataSafeSecurityAssessmentFindingFindings <a name="DataOciDataSafeSecurityAssessmentFindingFindings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentFindingFindings: dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings = { ... }
```


### DataOciDataSafeSecurityAssessmentFindingFindingsReferences <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentFindingFindingsReferences: dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentFindingFilterList <a name="DataOciDataSafeSecurityAssessmentFindingFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentFindingFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentFindingFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>[]

---


### DataOciDataSafeSecurityAssessmentFindingFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityAssessmentFindingFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>

---


### DataOciDataSafeSecurityAssessmentFindingFindingsList <a name="DataOciDataSafeSecurityAssessmentFindingFindingsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.assessmentId">assessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.details">details</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.hasTargetDbRiskLevelChanged">hasTargetDbRiskLevelChanged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isRiskModified">isRiskModified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isTopFinding">isTopFinding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oneline">oneline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oracleDefinedSeverity">oracleDefinedSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.references">references</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.remarks">remarks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeValidUntil">timeValidUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings">DataOciDataSafeSecurityAssessmentFindingFindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.details"></a>

```typescript
public readonly details: string[];
```

- *Type:* string[]

---

##### `hasTargetDbRiskLevelChanged`<sup>Required</sup> <a name="hasTargetDbRiskLevelChanged" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.hasTargetDbRiskLevelChanged"></a>

```typescript
public readonly hasTargetDbRiskLevelChanged: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRiskModified`<sup>Required</sup> <a name="isRiskModified" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isRiskModified"></a>

```typescript
public readonly isRiskModified: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTopFinding`<sup>Required</sup> <a name="isTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isTopFinding"></a>

```typescript
public readonly isTopFinding: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `justification`<sup>Required</sup> <a name="justification" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `oneline`<sup>Required</sup> <a name="oneline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oneline"></a>

```typescript
public readonly oneline: string;
```

- *Type:* string

---

##### `oracleDefinedSeverity`<sup>Required</sup> <a name="oracleDefinedSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oracleDefinedSeverity"></a>

```typescript
public readonly oracleDefinedSeverity: string;
```

- *Type:* string

---

##### `references`<sup>Required</sup> <a name="references" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.references"></a>

```typescript
public readonly references: DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList</a>

---

##### `remarks`<sup>Required</sup> <a name="remarks" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.remarks"></a>

```typescript
public readonly remarks: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timeValidUntil`<sup>Required</sup> <a name="timeValidUntil" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeValidUntil"></a>

```typescript
public readonly timeValidUntil: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentFindingFindings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings">DataOciDataSafeSecurityAssessmentFindingFindings</a>

---


### DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessmentFinding } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.cis">cis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.gdpr">gdpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.obp">obp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.stig">stig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences">DataOciDataSafeSecurityAssessmentFindingFindingsReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cis`<sup>Required</sup> <a name="cis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.cis"></a>

```typescript
public readonly cis: string;
```

- *Type:* string

---

##### `gdpr`<sup>Required</sup> <a name="gdpr" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.gdpr"></a>

```typescript
public readonly gdpr: string;
```

- *Type:* string

---

##### `obp`<sup>Required</sup> <a name="obp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.obp"></a>

```typescript
public readonly obp: string;
```

- *Type:* string

---

##### `stig`<sup>Required</sup> <a name="stig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.stig"></a>

```typescript
public readonly stig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentFindingFindingsReferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences">DataOciDataSafeSecurityAssessmentFindingFindingsReferences</a>

---



