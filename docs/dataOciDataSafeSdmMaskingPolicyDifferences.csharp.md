# `dataOciDataSafeSdmMaskingPolicyDifferences` Submodule <a name="`dataOciDataSafeSdmMaskingPolicyDifferences` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferences <a name="DataOciDataSafeSdmMaskingPolicyDifferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences oci_data_safe_sdm_masking_policy_differences}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferences(Construct Scope, string Id, DataOciDataSafeSdmMaskingPolicyDifferencesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig">DataOciDataSafeSdmMaskingPolicyDifferencesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig">DataOciDataSafeSdmMaskingPolicyDifferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDifferenceAccessLevel">ResetDifferenceAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetMaskingPolicyId">ResetMaskingPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetSensitiveDataModelId">ResetSensitiveDataModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDifferenceAccessLevel` <a name="ResetDifferenceAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDifferenceAccessLevel"></a>

```csharp
private void ResetDifferenceAccessLevel()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaskingPolicyId` <a name="ResetMaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetMaskingPolicyId"></a>

```csharp
private void ResetMaskingPolicyId()
```

##### `ResetSensitiveDataModelId` <a name="ResetSensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetSensitiveDataModelId"></a>

```csharp
private void ResetSensitiveDataModelId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferences resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSdmMaskingPolicyDifferences.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSdmMaskingPolicyDifferences.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSdmMaskingPolicyDifferences.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSdmMaskingPolicyDifferences.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferences resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSdmMaskingPolicyDifferences to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSdmMaskingPolicyDifferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSdmMaskingPolicyDifferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList">DataOciDataSafeSdmMaskingPolicyDifferencesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sdmMaskingPolicyDifferenceCollection">SdmMaskingPolicyDifferenceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevelInput">DifferenceAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelIdInput">SensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevel">DifferenceAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filter"></a>

```csharp
public DataOciDataSafeSdmMaskingPolicyDifferencesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList">DataOciDataSafeSdmMaskingPolicyDifferencesFilterList</a>

---

##### `SdmMaskingPolicyDifferenceCollection`<sup>Required</sup> <a name="SdmMaskingPolicyDifferenceCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sdmMaskingPolicyDifferenceCollection"></a>

```csharp
public DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList SdmMaskingPolicyDifferenceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DifferenceAccessLevelInput`<sup>Optional</sup> <a name="DifferenceAccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevelInput"></a>

```csharp
public string DifferenceAccessLevelInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyIdInput"></a>

```csharp
public string MaskingPolicyIdInput { get; }
```

- *Type:* string

---

##### `SensitiveDataModelIdInput`<sup>Optional</sup> <a name="SensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelIdInput"></a>

```csharp
public string SensitiveDataModelIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DifferenceAccessLevel`<sup>Required</sup> <a name="DifferenceAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevel"></a>

```csharp
public string DifferenceAccessLevel { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; }
```

- *Type:* string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferencesConfig <a name="DataOciDataSafeSdmMaskingPolicyDifferencesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object CompartmentIdInSubtree = null,
    string DifferenceAccessLevel = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string MaskingPolicyId = null,
    string SensitiveDataModelId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id_in_subtree DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.differenceAccessLevel">DifferenceAccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#difference_access_level DataOciDataSafeSdmMaskingPolicyDifferences#difference_access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#display_name DataOciDataSafeSdmMaskingPolicyDifferences#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#id DataOciDataSafeSdmMaskingPolicyDifferences#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#masking_policy_id DataOciDataSafeSdmMaskingPolicyDifferences#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#sensitive_data_model_id DataOciDataSafeSdmMaskingPolicyDifferences#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#state DataOciDataSafeSdmMaskingPolicyDifferences#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id_in_subtree DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id_in_subtree}.

---

##### `DifferenceAccessLevel`<sup>Optional</sup> <a name="DifferenceAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.differenceAccessLevel"></a>

```csharp
public string DifferenceAccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#difference_access_level DataOciDataSafeSdmMaskingPolicyDifferences#difference_access_level}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#display_name DataOciDataSafeSdmMaskingPolicyDifferences#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#filter DataOciDataSafeSdmMaskingPolicyDifferences#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#id DataOciDataSafeSdmMaskingPolicyDifferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaskingPolicyId`<sup>Optional</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#masking_policy_id DataOciDataSafeSdmMaskingPolicyDifferences#masking_policy_id}.

---

##### `SensitiveDataModelId`<sup>Optional</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#sensitive_data_model_id DataOciDataSafeSdmMaskingPolicyDifferences#sensitive_data_model_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#state DataOciDataSafeSdmMaskingPolicyDifferences#state}.

---

### DataOciDataSafeSdmMaskingPolicyDifferencesFilter <a name="DataOciDataSafeSdmMaskingPolicyDifferencesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#name DataOciDataSafeSdmMaskingPolicyDifferences#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#values DataOciDataSafeSdmMaskingPolicyDifferences#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#regex DataOciDataSafeSdmMaskingPolicyDifferences#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#name DataOciDataSafeSdmMaskingPolicyDifferences#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#values DataOciDataSafeSdmMaskingPolicyDifferences#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#regex DataOciDataSafeSdmMaskingPolicyDifferences#regex}.

---

### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection {

};
```


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSdmMaskingPolicyDifferencesFilterList <a name="DataOciDataSafeSdmMaskingPolicyDifferencesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.get"></a>

```csharp
private DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.differenceType">DifferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreationStarted">TimeCreationStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DifferenceType`<sup>Required</sup> <a name="DifferenceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.differenceType"></a>

```csharp
public string DifferenceType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; }
```

- *Type:* string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeCreationStarted`<sup>Required</sup> <a name="TimeCreationStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreationStarted"></a>

```csharp
public string TimeCreationStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems</a>

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.get"></a>

```csharp
private DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection</a>

---



