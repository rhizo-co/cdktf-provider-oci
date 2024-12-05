# `dataOciOsManagementHubErrata` Submodule <a name="`dataOciOsManagementHubErrata` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubErrata <a name="DataOciOsManagementHubErrata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata oci_os_management_hub_errata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrata(Construct Scope, string Id, DataOciOsManagementHubErrataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig">DataOciOsManagementHubErrataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig">DataOciOsManagementHubErrataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetAdvisorySeverity">ResetAdvisorySeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetAdvisoryType">ResetAdvisoryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetClassificationType">ResetClassificationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetNameContains">ResetNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetTimeIssueDateEnd">ResetTimeIssueDateEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetTimeIssueDateStart">ResetTimeIssueDateStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAdvisorySeverity` <a name="ResetAdvisorySeverity" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetAdvisorySeverity"></a>

```csharp
private void ResetAdvisorySeverity()
```

##### `ResetAdvisoryType` <a name="ResetAdvisoryType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetAdvisoryType"></a>

```csharp
private void ResetAdvisoryType()
```

##### `ResetClassificationType` <a name="ResetClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetClassificationType"></a>

```csharp
private void ResetClassificationType()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetNameContains"></a>

```csharp
private void ResetNameContains()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetOsFamily"></a>

```csharp
private void ResetOsFamily()
```

##### `ResetTimeIssueDateEnd` <a name="ResetTimeIssueDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetTimeIssueDateEnd"></a>

```csharp
private void ResetTimeIssueDateEnd()
```

##### `ResetTimeIssueDateStart` <a name="ResetTimeIssueDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetTimeIssueDateStart"></a>

```csharp
private void ResetTimeIssueDateStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubErrata resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubErrata.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubErrata.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubErrata.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubErrata.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubErrata resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubErrata to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubErrata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubErrata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.erratumCollection">ErratumCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList">DataOciOsManagementHubErrataErratumCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList">DataOciOsManagementHubErrataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisorySeverityInput">AdvisorySeverityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisoryTypeInput">AdvisoryTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.classificationTypeInput">ClassificationTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameContainsInput">NameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.osFamilyInput">OsFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateEndInput">TimeIssueDateEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateStartInput">TimeIssueDateStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisorySeverity">AdvisorySeverity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisoryType">AdvisoryType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.classificationType">ClassificationType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameContains">NameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateEnd">TimeIssueDateEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateStart">TimeIssueDateStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ErratumCollection`<sup>Required</sup> <a name="ErratumCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.erratumCollection"></a>

```csharp
public DataOciOsManagementHubErrataErratumCollectionList ErratumCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList">DataOciOsManagementHubErrataErratumCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.filter"></a>

```csharp
public DataOciOsManagementHubErrataFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList">DataOciOsManagementHubErrataFilterList</a>

---

##### `AdvisorySeverityInput`<sup>Optional</sup> <a name="AdvisorySeverityInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisorySeverityInput"></a>

```csharp
public string[] AdvisorySeverityInput { get; }
```

- *Type:* string[]

---

##### `AdvisoryTypeInput`<sup>Optional</sup> <a name="AdvisoryTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisoryTypeInput"></a>

```csharp
public string[] AdvisoryTypeInput { get; }
```

- *Type:* string[]

---

##### `ClassificationTypeInput`<sup>Optional</sup> <a name="ClassificationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.classificationTypeInput"></a>

```csharp
public string[] ClassificationTypeInput { get; }
```

- *Type:* string[]

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameContainsInput"></a>

```csharp
public string NameContainsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.osFamilyInput"></a>

```csharp
public string OsFamilyInput { get; }
```

- *Type:* string

---

##### `TimeIssueDateEndInput`<sup>Optional</sup> <a name="TimeIssueDateEndInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateEndInput"></a>

```csharp
public string TimeIssueDateEndInput { get; }
```

- *Type:* string

---

##### `TimeIssueDateStartInput`<sup>Optional</sup> <a name="TimeIssueDateStartInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateStartInput"></a>

```csharp
public string TimeIssueDateStartInput { get; }
```

- *Type:* string

---

##### `AdvisorySeverity`<sup>Required</sup> <a name="AdvisorySeverity" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisorySeverity"></a>

```csharp
public string[] AdvisorySeverity { get; }
```

- *Type:* string[]

---

##### `AdvisoryType`<sup>Required</sup> <a name="AdvisoryType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisoryType"></a>

```csharp
public string[] AdvisoryType { get; }
```

- *Type:* string[]

---

##### `ClassificationType`<sup>Required</sup> <a name="ClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.classificationType"></a>

```csharp
public string[] ClassificationType { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameContains"></a>

```csharp
public string NameContains { get; }
```

- *Type:* string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `TimeIssueDateEnd`<sup>Required</sup> <a name="TimeIssueDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateEnd"></a>

```csharp
public string TimeIssueDateEnd { get; }
```

- *Type:* string

---

##### `TimeIssueDateStart`<sup>Required</sup> <a name="TimeIssueDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateStart"></a>

```csharp
public string TimeIssueDateStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubErrataConfig <a name="DataOciOsManagementHubErrataConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string[] AdvisorySeverity = null,
    string[] AdvisoryType = null,
    string[] ClassificationType = null,
    object Filter = null,
    string Id = null,
    string[] Name = null,
    string NameContains = null,
    string OsFamily = null,
    string TimeIssueDateEnd = null,
    string TimeIssueDateStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#compartment_id DataOciOsManagementHubErrata#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.advisorySeverity">AdvisorySeverity</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_severity DataOciOsManagementHubErrata#advisory_severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.advisoryType">AdvisoryType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_type DataOciOsManagementHubErrata#advisory_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.classificationType">ClassificationType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#classification_type DataOciOsManagementHubErrata#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#id DataOciOsManagementHubErrata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.name">Name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.nameContains">NameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name_contains DataOciOsManagementHubErrata#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.osFamily">OsFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#os_family DataOciOsManagementHubErrata#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.timeIssueDateEnd">TimeIssueDateEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_end DataOciOsManagementHubErrata#time_issue_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.timeIssueDateStart">TimeIssueDateStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_start DataOciOsManagementHubErrata#time_issue_date_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#compartment_id DataOciOsManagementHubErrata#compartment_id}.

---

##### `AdvisorySeverity`<sup>Optional</sup> <a name="AdvisorySeverity" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.advisorySeverity"></a>

```csharp
public string[] AdvisorySeverity { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_severity DataOciOsManagementHubErrata#advisory_severity}.

---

##### `AdvisoryType`<sup>Optional</sup> <a name="AdvisoryType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.advisoryType"></a>

```csharp
public string[] AdvisoryType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_type DataOciOsManagementHubErrata#advisory_type}.

---

##### `ClassificationType`<sup>Optional</sup> <a name="ClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.classificationType"></a>

```csharp
public string[] ClassificationType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#classification_type DataOciOsManagementHubErrata#classification_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#filter DataOciOsManagementHubErrata#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#id DataOciOsManagementHubErrata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.nameContains"></a>

```csharp
public string NameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name_contains DataOciOsManagementHubErrata#name_contains}.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.osFamily"></a>

```csharp
public string OsFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#os_family DataOciOsManagementHubErrata#os_family}.

---

##### `TimeIssueDateEnd`<sup>Optional</sup> <a name="TimeIssueDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.timeIssueDateEnd"></a>

```csharp
public string TimeIssueDateEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_end DataOciOsManagementHubErrata#time_issue_date_end}.

---

##### `TimeIssueDateStart`<sup>Optional</sup> <a name="TimeIssueDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.timeIssueDateStart"></a>

```csharp
public string TimeIssueDateStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_start DataOciOsManagementHubErrata#time_issue_date_start}.

---

### DataOciOsManagementHubErrataErratumCollection <a name="DataOciOsManagementHubErrataErratumCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollection {

};
```


### DataOciOsManagementHubErrataErratumCollectionItems <a name="DataOciOsManagementHubErrataErratumCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionItems {

};
```


### DataOciOsManagementHubErrataErratumCollectionItemsPackages <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionItemsPackages {

};
```


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources {

};
```


### DataOciOsManagementHubErrataFilter <a name="DataOciOsManagementHubErrataFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#values DataOciOsManagementHubErrata#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#regex DataOciOsManagementHubErrata#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#values DataOciOsManagementHubErrata#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#regex DataOciOsManagementHubErrata#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubErrataErratumCollectionItemsList <a name="DataOciOsManagementHubErrataErratumCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubErrataErratumCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubErrataErratumCollectionItemsOutputReference <a name="DataOciOsManagementHubErrataErratumCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.advisorySeverity">AdvisorySeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.advisoryType">AdvisoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.classificationType">ClassificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.osFamilies">OsFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.packages">Packages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList">DataOciOsManagementHubErrataErratumCollectionItemsPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.references">References</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.relatedCves">RelatedCves</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.solution">Solution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.synopsis">Synopsis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.timeIssued">TimeIssued</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItems">DataOciOsManagementHubErrataErratumCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvisorySeverity`<sup>Required</sup> <a name="AdvisorySeverity" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.advisorySeverity"></a>

```csharp
public string AdvisorySeverity { get; }
```

- *Type:* string

---

##### `AdvisoryType`<sup>Required</sup> <a name="AdvisoryType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.advisoryType"></a>

```csharp
public string AdvisoryType { get; }
```

- *Type:* string

---

##### `ClassificationType`<sup>Required</sup> <a name="ClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.classificationType"></a>

```csharp
public string ClassificationType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsFamilies`<sup>Required</sup> <a name="OsFamilies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.osFamilies"></a>

```csharp
public string[] OsFamilies { get; }
```

- *Type:* string[]

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.packages"></a>

```csharp
public DataOciOsManagementHubErrataErratumCollectionItemsPackagesList Packages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList">DataOciOsManagementHubErrataErratumCollectionItemsPackagesList</a>

---

##### `References`<sup>Required</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.references"></a>

```csharp
public string References { get; }
```

- *Type:* string

---

##### `RelatedCves`<sup>Required</sup> <a name="RelatedCves" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.relatedCves"></a>

```csharp
public string[] RelatedCves { get; }
```

- *Type:* string[]

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `Solution`<sup>Required</sup> <a name="Solution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.solution"></a>

```csharp
public string Solution { get; }
```

- *Type:* string

---

##### `Synopsis`<sup>Required</sup> <a name="Synopsis" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.synopsis"></a>

```csharp
public string Synopsis { get; }
```

- *Type:* string

---

##### `TimeIssued`<sup>Required</sup> <a name="TimeIssued" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.timeIssued"></a>

```csharp
public string TimeIssued { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubErrataErratumCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItems">DataOciOsManagementHubErrataErratumCollectionItems</a>

---


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesList <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionItemsPackagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.get"></a>

```csharp
private DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.checksumType">ChecksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.isLatest">IsLatest</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.osFamilies">OsFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.softwareSources">SoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList">DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackages">DataOciOsManagementHubErrataErratumCollectionItemsPackages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `ChecksumType`<sup>Required</sup> <a name="ChecksumType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.checksumType"></a>

```csharp
public string ChecksumType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsLatest`<sup>Required</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.isLatest"></a>

```csharp
public IResolvable IsLatest { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsFamilies`<sup>Required</sup> <a name="OsFamilies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.osFamilies"></a>

```csharp
public string[] OsFamilies { get; }
```

- *Type:* string[]

---

##### `SoftwareSources`<sup>Required</sup> <a name="SoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.softwareSources"></a>

```csharp
public DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList SoftwareSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList">DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubErrataErratumCollectionItemsPackages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackages">DataOciOsManagementHubErrataErratumCollectionItemsPackages</a>

---


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.get"></a>

```csharp
private DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources">DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```csharp
public IResolvable IsMandatoryForAutonomousLinux { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```csharp
public string SoftwareSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources">DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources</a>

---


### DataOciOsManagementHubErrataErratumCollectionList <a name="DataOciOsManagementHubErrataErratumCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.get"></a>

```csharp
private DataOciOsManagementHubErrataErratumCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubErrataErratumCollectionOutputReference <a name="DataOciOsManagementHubErrataErratumCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataErratumCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList">DataOciOsManagementHubErrataErratumCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollection">DataOciOsManagementHubErrataErratumCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubErrataErratumCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList">DataOciOsManagementHubErrataErratumCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubErrataErratumCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollection">DataOciOsManagementHubErrataErratumCollection</a>

---


### DataOciOsManagementHubErrataFilterList <a name="DataOciOsManagementHubErrataFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.get"></a>

```csharp
private DataOciOsManagementHubErrataFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubErrataFilterOutputReference <a name="DataOciOsManagementHubErrataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubErrataFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



