# `dataOciOsManagementHubSoftwarePackages` Submodule <a name="`dataOciOsManagementHubSoftwarePackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwarePackages <a name="DataOciOsManagementHubSoftwarePackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages oci_os_management_hub_software_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackages(Construct Scope, string Id, DataOciOsManagementHubSoftwarePackagesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig">DataOciOsManagementHubSoftwarePackagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig">DataOciOsManagementHubSoftwarePackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetIsLatest">ResetIsLatest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetArchitecture` <a name="ResetArchitecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetArchitecture"></a>

```csharp
private void ResetArchitecture()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetDisplayNameContains"></a>

```csharp
private void ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLatest` <a name="ResetIsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetIsLatest"></a>

```csharp
private void ResetIsLatest()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetOsFamily"></a>

```csharp
private void ResetOsFamily()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwarePackages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwarePackages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwarePackages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwarePackages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwarePackages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwarePackages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubSoftwarePackages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubSoftwarePackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwarePackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList">DataOciOsManagementHubSoftwarePackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.softwarePackageCollection">SoftwarePackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.architectureInput">ArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.isLatestInput">IsLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.osFamilyInput">OsFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.isLatest">IsLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.filter"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList">DataOciOsManagementHubSoftwarePackagesFilterList</a>

---

##### `SoftwarePackageCollection`<sup>Required</sup> <a name="SoftwarePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.softwarePackageCollection"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList SoftwarePackageCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList</a>

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.architectureInput"></a>

```csharp
public string ArchitectureInput { get; }
```

- *Type:* string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.displayNameContainsInput"></a>

```csharp
public string DisplayNameContainsInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsLatestInput`<sup>Optional</sup> <a name="IsLatestInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.isLatestInput"></a>

```csharp
public object IsLatestInput { get; }
```

- *Type:* object

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.osFamilyInput"></a>

```csharp
public string OsFamilyInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLatest`<sup>Required</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.isLatest"></a>

```csharp
public object IsLatest { get; }
```

- *Type:* object

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwarePackagesConfig <a name="DataOciOsManagementHubSoftwarePackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Architecture = null,
    string DisplayName = null,
    string DisplayNameContains = null,
    object Filter = null,
    string Id = null,
    object IsLatest = null,
    string OsFamily = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.architecture">Architecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#architecture DataOciOsManagementHubSoftwarePackages#architecture}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#display_name DataOciOsManagementHubSoftwarePackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#display_name_contains DataOciOsManagementHubSoftwarePackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#id DataOciOsManagementHubSoftwarePackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.isLatest">IsLatest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#is_latest DataOciOsManagementHubSoftwarePackages#is_latest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.osFamily">OsFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#os_family DataOciOsManagementHubSoftwarePackages#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#version DataOciOsManagementHubSoftwarePackages#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.architecture"></a>

```csharp
public string Architecture { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#architecture DataOciOsManagementHubSoftwarePackages#architecture}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#display_name DataOciOsManagementHubSoftwarePackages#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#display_name_contains DataOciOsManagementHubSoftwarePackages#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#filter DataOciOsManagementHubSoftwarePackages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#id DataOciOsManagementHubSoftwarePackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLatest`<sup>Optional</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.isLatest"></a>

```csharp
public object IsLatest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#is_latest DataOciOsManagementHubSoftwarePackages#is_latest}.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.osFamily"></a>

```csharp
public string OsFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#os_family DataOciOsManagementHubSoftwarePackages#os_family}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#version DataOciOsManagementHubSoftwarePackages#version}.

---

### DataOciOsManagementHubSoftwarePackagesFilter <a name="DataOciOsManagementHubSoftwarePackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#name DataOciOsManagementHubSoftwarePackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#values DataOciOsManagementHubSoftwarePackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#regex DataOciOsManagementHubSoftwarePackages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#name DataOciOsManagementHubSoftwarePackages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#values DataOciOsManagementHubSoftwarePackages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_packages#regex DataOciOsManagementHubSoftwarePackages#regex}.

---

### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection {

};
```


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems {

};
```


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies {

};
```


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles {

};
```


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwarePackagesFilterList <a name="DataOciOsManagementHubSoftwarePackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.get"></a>

```csharp
private DataOciOsManagementHubSoftwarePackagesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubSoftwarePackagesFilterOutputReference <a name="DataOciOsManagementHubSoftwarePackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get"></a>

```csharp
private DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependency">Dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyModifier">DependencyModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyType">DependencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependency"></a>

```csharp
public string Dependency { get; }
```

- *Type:* string

---

##### `DependencyModifier`<sup>Required</sup> <a name="DependencyModifier" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyModifier"></a>

```csharp
public string DependencyModifier { get; }
```

- *Type:* string

---

##### `DependencyType`<sup>Required</sup> <a name="DependencyType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyType"></a>

```csharp
public string DependencyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependencies</a>

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get"></a>

```csharp
private DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksumType">ChecksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `ChecksumType`<sup>Required</sup> <a name="ChecksumType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksumType"></a>

```csharp
public string ChecksumType { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFiles</a>

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksumType">ChecksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.dependencies">Dependencies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.files">Files</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.isLatest">IsLatest</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.lastModifiedDate">LastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.osFamilies">OsFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.softwareSources">SoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `ChecksumType`<sup>Required</sup> <a name="ChecksumType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksumType"></a>

```csharp
public string ChecksumType { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.dependencies"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList Dependencies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Files`<sup>Required</sup> <a name="Files" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.files"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList Files { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsFilesList</a>

---

##### `IsLatest`<sup>Required</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.isLatest"></a>

```csharp
public IResolvable IsLatest { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.lastModifiedDate"></a>

```csharp
public string LastModifiedDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsFamilies`<sup>Required</sup> <a name="OsFamilies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.osFamilies"></a>

```csharp
public string[] OsFamilies { get; }
```

- *Type:* string[]

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; }
```

- *Type:* string

---

##### `SoftwareSources`<sup>Required</sup> <a name="SoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.softwareSources"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList SoftwareSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItems</a>

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get"></a>

```csharp
private DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```csharp
public IResolvable IsMandatoryForAutonomousLinux { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```csharp
public string SoftwareSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.get"></a>

```csharp
private DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference <a name="DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackages.DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection">DataOciOsManagementHubSoftwarePackagesSoftwarePackageCollection</a>

---



