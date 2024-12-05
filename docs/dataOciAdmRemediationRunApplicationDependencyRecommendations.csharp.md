# `dataOciAdmRemediationRunApplicationDependencyRecommendations` Submodule <a name="`dataOciAdmRemediationRunApplicationDependencyRecommendations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAdmRemediationRunApplicationDependencyRecommendations <a name="DataOciAdmRemediationRunApplicationDependencyRecommendations" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations oci_adm_remediation_run_application_dependency_recommendations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendations(Construct Scope, string Id, DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig">DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig">DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetGav">ResetGav</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetPurl">ResetPurl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGav` <a name="ResetGav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetGav"></a>

```csharp
private void ResetGav()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPurl` <a name="ResetPurl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetPurl"></a>

```csharp
private void ResetPurl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAdmRemediationRunApplicationDependencyRecommendations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAdmRemediationRunApplicationDependencyRecommendations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAdmRemediationRunApplicationDependencyRecommendations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAdmRemediationRunApplicationDependencyRecommendations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAdmRemediationRunApplicationDependencyRecommendations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAdmRemediationRunApplicationDependencyRecommendations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAdmRemediationRunApplicationDependencyRecommendations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAdmRemediationRunApplicationDependencyRecommendations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAdmRemediationRunApplicationDependencyRecommendations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.applicationDependencyRecommendationCollection">ApplicationDependencyRecommendationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gavInput">GavInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purlInput">PurlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunIdInput">RemediationRunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gav">Gav</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purl">Purl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunId">RemediationRunId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApplicationDependencyRecommendationCollection`<sup>Required</sup> <a name="ApplicationDependencyRecommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.applicationDependencyRecommendationCollection"></a>

```csharp
public DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList ApplicationDependencyRecommendationCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filter"></a>

```csharp
public DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GavInput`<sup>Optional</sup> <a name="GavInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gavInput"></a>

```csharp
public string GavInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PurlInput`<sup>Optional</sup> <a name="PurlInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purlInput"></a>

```csharp
public string PurlInput { get; }
```

- *Type:* string

---

##### `RemediationRunIdInput`<sup>Optional</sup> <a name="RemediationRunIdInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunIdInput"></a>

```csharp
public string RemediationRunIdInput { get; }
```

- *Type:* string

---

##### `Gav`<sup>Required</sup> <a name="Gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gav"></a>

```csharp
public string Gav { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Purl`<sup>Required</sup> <a name="Purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purl"></a>

```csharp
public string Purl { get; }
```

- *Type:* string

---

##### `RemediationRunId`<sup>Required</sup> <a name="RemediationRunId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunId"></a>

```csharp
public string RemediationRunId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection {

};
```


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems {

};
```


### DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RemediationRunId,
    object Filter = null,
    string Gav = null,
    string Id = null,
    string Purl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.remediationRunId">RemediationRunId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#remediation_run_id DataOciAdmRemediationRunApplicationDependencyRecommendations#remediation_run_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.gav">Gav</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#gav DataOciAdmRemediationRunApplicationDependencyRecommendations#gav}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#id DataOciAdmRemediationRunApplicationDependencyRecommendations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.purl">Purl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#purl DataOciAdmRemediationRunApplicationDependencyRecommendations#purl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RemediationRunId`<sup>Required</sup> <a name="RemediationRunId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.remediationRunId"></a>

```csharp
public string RemediationRunId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#remediation_run_id DataOciAdmRemediationRunApplicationDependencyRecommendations#remediation_run_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#filter DataOciAdmRemediationRunApplicationDependencyRecommendations#filter}

---

##### `Gav`<sup>Optional</sup> <a name="Gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.gav"></a>

```csharp
public string Gav { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#gav DataOciAdmRemediationRunApplicationDependencyRecommendations#gav}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#id DataOciAdmRemediationRunApplicationDependencyRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Purl`<sup>Optional</sup> <a name="Purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.purl"></a>

```csharp
public string Purl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#purl DataOciAdmRemediationRunApplicationDependencyRecommendations#purl}.

---

### DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#name DataOciAdmRemediationRunApplicationDependencyRecommendations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#values DataOciAdmRemediationRunApplicationDependencyRecommendations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#regex DataOciAdmRemediationRunApplicationDependencyRecommendations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#name DataOciAdmRemediationRunApplicationDependencyRecommendations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#values DataOciAdmRemediationRunApplicationDependencyRecommendations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#regex DataOciAdmRemediationRunApplicationDependencyRecommendations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.get"></a>

```csharp
private DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.applicationDependencyNodeIds">ApplicationDependencyNodeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.gav">Gav</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.purl">Purl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedGav">RecommendedGav</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedPurl">RecommendedPurl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationDependencyNodeIds`<sup>Required</sup> <a name="ApplicationDependencyNodeIds" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.applicationDependencyNodeIds"></a>

```csharp
public string[] ApplicationDependencyNodeIds { get; }
```

- *Type:* string[]

---

##### `Gav`<sup>Required</sup> <a name="Gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.gav"></a>

```csharp
public string Gav { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Purl`<sup>Required</sup> <a name="Purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.purl"></a>

```csharp
public string Purl { get; }
```

- *Type:* string

---

##### `RecommendedGav`<sup>Required</sup> <a name="RecommendedGav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedGav"></a>

```csharp
public string RecommendedGav { get; }
```

- *Type:* string

---

##### `RecommendedPurl`<sup>Required</sup> <a name="RecommendedPurl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedPurl"></a>

```csharp
public string RecommendedPurl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems</a>

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.get"></a>

```csharp
private DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.items"></a>

```csharp
public DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection</a>

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.get"></a>

```csharp
private DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



