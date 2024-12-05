# `dataOciDataSafeSecurityAssessmentFinding` Submodule <a name="`dataOciDataSafeSecurityAssessmentFinding` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentFinding <a name="DataOciDataSafeSecurityAssessmentFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding oci_data_safe_security_assessment_finding}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFinding(Construct Scope, string Id, DataOciDataSafeSecurityAssessmentFindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig">DataOciDataSafeSecurityAssessmentFindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig">DataOciDataSafeSecurityAssessmentFindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFindingKey">ResetFindingKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetIsTopFinding">ResetIsTopFinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetReferences">ResetReferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFindingKey` <a name="ResetFindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFindingKey"></a>

```csharp
private void ResetFindingKey()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsTopFinding` <a name="ResetIsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetIsTopFinding"></a>

```csharp
private void ResetIsTopFinding()
```

##### `ResetReferences` <a name="ResetReferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetReferences"></a>

```csharp
private void ResetReferences()
```

##### `ResetSeverity` <a name="ResetSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessmentFinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessmentFinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessmentFinding.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessmentFinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityAssessmentFinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList">DataOciDataSafeSecurityAssessmentFindingFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findings">Findings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList">DataOciDataSafeSecurityAssessmentFindingFindingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKeyInput">FindingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFindingInput">IsTopFindingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.referencesInput">ReferencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentIdInput">SecurityAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKey">FindingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFinding">IsTopFinding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.references">References</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filter"></a>

```csharp
public DataOciDataSafeSecurityAssessmentFindingFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList">DataOciDataSafeSecurityAssessmentFindingFilterList</a>

---

##### `Findings`<sup>Required</sup> <a name="Findings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findings"></a>

```csharp
public DataOciDataSafeSecurityAssessmentFindingFindingsList Findings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList">DataOciDataSafeSecurityAssessmentFindingFindingsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `FindingKeyInput`<sup>Optional</sup> <a name="FindingKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKeyInput"></a>

```csharp
public string FindingKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsTopFindingInput`<sup>Optional</sup> <a name="IsTopFindingInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFindingInput"></a>

```csharp
public object IsTopFindingInput { get; }
```

- *Type:* object

---

##### `ReferencesInput`<sup>Optional</sup> <a name="ReferencesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.referencesInput"></a>

```csharp
public string ReferencesInput { get; }
```

- *Type:* string

---

##### `SecurityAssessmentIdInput`<sup>Optional</sup> <a name="SecurityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentIdInput"></a>

```csharp
public string SecurityAssessmentIdInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `FindingKey`<sup>Required</sup> <a name="FindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKey"></a>

```csharp
public string FindingKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsTopFinding`<sup>Required</sup> <a name="IsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFinding"></a>

```csharp
public object IsTopFinding { get; }
```

- *Type:* object

---

##### `References`<sup>Required</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.references"></a>

```csharp
public string References { get; }
```

- *Type:* string

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentId"></a>

```csharp
public string SecurityAssessmentId { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentFindingConfig <a name="DataOciDataSafeSecurityAssessmentFindingConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecurityAssessmentId,
    string AccessLevel = null,
    object CompartmentIdInSubtree = null,
    object Filter = null,
    string FindingKey = null,
    string Id = null,
    object IsTopFinding = null,
    string References = null,
    string Severity = null,
    string State = null,
    string TargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.findingKey">FindingKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.isTopFinding">IsTopFinding</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.references">References</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.securityAssessmentId"></a>

```csharp
public string SecurityAssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#filter DataOciDataSafeSecurityAssessmentFinding#filter}

---

##### `FindingKey`<sup>Optional</sup> <a name="FindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.findingKey"></a>

```csharp
public string FindingKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTopFinding`<sup>Optional</sup> <a name="IsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.isTopFinding"></a>

```csharp
public object IsTopFinding { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}.

---

##### `References`<sup>Optional</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.references"></a>

```csharp
public string References { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}.

---

### DataOciDataSafeSecurityAssessmentFindingFilter <a name="DataOciDataSafeSecurityAssessmentFindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#name DataOciDataSafeSecurityAssessmentFinding#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#values DataOciDataSafeSecurityAssessmentFinding#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#regex DataOciDataSafeSecurityAssessmentFinding#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#name DataOciDataSafeSecurityAssessmentFinding#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#values DataOciDataSafeSecurityAssessmentFinding#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#regex DataOciDataSafeSecurityAssessmentFinding#regex}.

---

### DataOciDataSafeSecurityAssessmentFindingFindings <a name="DataOciDataSafeSecurityAssessmentFindingFindings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingFindings {

};
```


### DataOciDataSafeSecurityAssessmentFindingFindingsReferences <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingFindingsReferences {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentFindingFilterList <a name="DataOciDataSafeSecurityAssessmentFindingFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentFindingFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityAssessmentFindingFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityAssessmentFindingFindingsList <a name="DataOciDataSafeSecurityAssessmentFindingFindingsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingFindingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.assessmentId">AssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.details">Details</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.hasTargetDbRiskLevelChanged">HasTargetDbRiskLevelChanged</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isRiskModified">IsRiskModified</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isTopFinding">IsTopFinding</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.justification">Justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oneline">Oneline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oracleDefinedSeverity">OracleDefinedSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.references">References</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.remarks">Remarks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeValidUntil">TimeValidUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings">DataOciDataSafeSecurityAssessmentFindingFindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.assessmentId"></a>

```csharp
public string AssessmentId { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.details"></a>

```csharp
public string[] Details { get; }
```

- *Type:* string[]

---

##### `HasTargetDbRiskLevelChanged`<sup>Required</sup> <a name="HasTargetDbRiskLevelChanged" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.hasTargetDbRiskLevelChanged"></a>

```csharp
public IResolvable HasTargetDbRiskLevelChanged { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRiskModified`<sup>Required</sup> <a name="IsRiskModified" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isRiskModified"></a>

```csharp
public IResolvable IsRiskModified { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsTopFinding`<sup>Required</sup> <a name="IsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isTopFinding"></a>

```csharp
public IResolvable IsTopFinding { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.justification"></a>

```csharp
public string Justification { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Oneline`<sup>Required</sup> <a name="Oneline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oneline"></a>

```csharp
public string Oneline { get; }
```

- *Type:* string

---

##### `OracleDefinedSeverity`<sup>Required</sup> <a name="OracleDefinedSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oracleDefinedSeverity"></a>

```csharp
public string OracleDefinedSeverity { get; }
```

- *Type:* string

---

##### `References`<sup>Required</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.references"></a>

```csharp
public DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList References { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList</a>

---

##### `Remarks`<sup>Required</sup> <a name="Remarks" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.remarks"></a>

```csharp
public string Remarks { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TimeValidUntil`<sup>Required</sup> <a name="TimeValidUntil" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeValidUntil"></a>

```csharp
public string TimeValidUntil { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentFindingFindings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings">DataOciDataSafeSecurityAssessmentFindingFindings</a>

---


### DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.cis">Cis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.gdpr">Gdpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.obp">Obp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.stig">Stig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences">DataOciDataSafeSecurityAssessmentFindingFindingsReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cis`<sup>Required</sup> <a name="Cis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.cis"></a>

```csharp
public string Cis { get; }
```

- *Type:* string

---

##### `Gdpr`<sup>Required</sup> <a name="Gdpr" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.gdpr"></a>

```csharp
public string Gdpr { get; }
```

- *Type:* string

---

##### `Obp`<sup>Required</sup> <a name="Obp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.obp"></a>

```csharp
public string Obp { get; }
```

- *Type:* string

---

##### `Stig`<sup>Required</sup> <a name="Stig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.stig"></a>

```csharp
public string Stig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentFindingFindingsReferences InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences">DataOciDataSafeSecurityAssessmentFindingFindingsReferences</a>

---



