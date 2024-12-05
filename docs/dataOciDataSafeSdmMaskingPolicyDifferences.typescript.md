# `dataOciDataSafeSdmMaskingPolicyDifferences` Submodule <a name="`dataOciDataSafeSdmMaskingPolicyDifferences` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferences <a name="DataOciDataSafeSdmMaskingPolicyDifferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences oci_data_safe_sdm_masking_policy_differences}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences(scope: Construct, id: string, config: DataOciDataSafeSdmMaskingPolicyDifferencesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig">DataOciDataSafeSdmMaskingPolicyDifferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig">DataOciDataSafeSdmMaskingPolicyDifferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDifferenceAccessLevel">resetDifferenceAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetMaskingPolicyId">resetMaskingPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetSensitiveDataModelId">resetSensitiveDataModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferencesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>[]

---

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDifferenceAccessLevel` <a name="resetDifferenceAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDifferenceAccessLevel"></a>

```typescript
public resetDifferenceAccessLevel(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaskingPolicyId` <a name="resetMaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetMaskingPolicyId"></a>

```typescript
public resetMaskingPolicyId(): void
```

##### `resetSensitiveDataModelId` <a name="resetSensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetSensitiveDataModelId"></a>

```typescript
public resetSensitiveDataModelId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferences resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSdmMaskingPolicyDifferences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSdmMaskingPolicyDifferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSdmMaskingPolicyDifferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList">DataOciDataSafeSdmMaskingPolicyDifferencesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sdmMaskingPolicyDifferenceCollection">sdmMaskingPolicyDifferenceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevelInput">differenceAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyIdInput">maskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevel">differenceAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSdmMaskingPolicyDifferencesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList">DataOciDataSafeSdmMaskingPolicyDifferencesFilterList</a>

---

##### `sdmMaskingPolicyDifferenceCollection`<sup>Required</sup> <a name="sdmMaskingPolicyDifferenceCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sdmMaskingPolicyDifferenceCollection"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceCollection: DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `differenceAccessLevelInput`<sup>Optional</sup> <a name="differenceAccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevelInput"></a>

```typescript
public readonly differenceAccessLevelInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferencesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingPolicyIdInput`<sup>Optional</sup> <a name="maskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyIdInput"></a>

```typescript
public readonly maskingPolicyIdInput: string;
```

- *Type:* string

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `differenceAccessLevel`<sup>Required</sup> <a name="differenceAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevel"></a>

```typescript
public readonly differenceAccessLevel: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferencesConfig <a name="DataOciDataSafeSdmMaskingPolicyDifferencesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSdmMaskingPolicyDifferencesConfig: dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id_in_subtree DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.differenceAccessLevel">differenceAccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#difference_access_level DataOciDataSafeSdmMaskingPolicyDifferences#difference_access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#display_name DataOciDataSafeSdmMaskingPolicyDifferences#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#id DataOciDataSafeSdmMaskingPolicyDifferences#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#masking_policy_id DataOciDataSafeSdmMaskingPolicyDifferences#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#sensitive_data_model_id DataOciDataSafeSdmMaskingPolicyDifferences#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#state DataOciDataSafeSdmMaskingPolicyDifferences#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id_in_subtree DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id_in_subtree}.

---

##### `differenceAccessLevel`<sup>Optional</sup> <a name="differenceAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.differenceAccessLevel"></a>

```typescript
public readonly differenceAccessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#difference_access_level DataOciDataSafeSdmMaskingPolicyDifferences#difference_access_level}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#display_name DataOciDataSafeSdmMaskingPolicyDifferences#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferencesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#filter DataOciDataSafeSdmMaskingPolicyDifferences#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#id DataOciDataSafeSdmMaskingPolicyDifferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maskingPolicyId`<sup>Optional</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#masking_policy_id DataOciDataSafeSdmMaskingPolicyDifferences#masking_policy_id}.

---

##### `sensitiveDataModelId`<sup>Optional</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#sensitive_data_model_id DataOciDataSafeSdmMaskingPolicyDifferences#sensitive_data_model_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#state DataOciDataSafeSdmMaskingPolicyDifferences#state}.

---

### DataOciDataSafeSdmMaskingPolicyDifferencesFilter <a name="DataOciDataSafeSdmMaskingPolicyDifferencesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSdmMaskingPolicyDifferencesFilter: dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#name DataOciDataSafeSdmMaskingPolicyDifferences#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#values DataOciDataSafeSdmMaskingPolicyDifferences#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#regex DataOciDataSafeSdmMaskingPolicyDifferences#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#name DataOciDataSafeSdmMaskingPolicyDifferences#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#values DataOciDataSafeSdmMaskingPolicyDifferences#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#regex DataOciDataSafeSdmMaskingPolicyDifferences#regex}.

---

### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection: dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection = { ... }
```


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems: dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSdmMaskingPolicyDifferencesFilterList <a name="DataOciDataSafeSdmMaskingPolicyDifferencesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferencesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>[]

---


### DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferencesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.differenceType">differenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreationStarted">timeCreationStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `differenceType`<sup>Required</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.differenceType"></a>

```typescript
public readonly differenceType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeCreationStarted`<sup>Required</sup> <a name="timeCreationStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreationStarted"></a>

```typescript
public readonly timeCreationStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems</a>

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferences } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection</a>

---



