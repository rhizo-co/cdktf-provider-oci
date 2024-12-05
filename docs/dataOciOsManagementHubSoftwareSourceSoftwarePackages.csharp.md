# `dataOciOsManagementHubSoftwareSourceSoftwarePackages` Submodule <a name="`dataOciOsManagementHubSoftwareSourceSoftwarePackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackages <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages oci_os_management_hub_software_source_software_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackages(Construct Scope, string Id, DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig">DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig">DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetIsLatest">ResetIsLatest</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayNameContains"></a>

```csharp
private void ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLatest` <a name="ResetIsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetIsLatest"></a>

```csharp
private void ResetIsLatest()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourceSoftwarePackages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourceSoftwarePackages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourceSoftwarePackages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourceSoftwarePackages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceSoftwarePackages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubSoftwareSourceSoftwarePackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceSoftwarePackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwarePackageCollection">SoftwarePackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatestInput">IsLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatest">IsLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filter"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList</a>

---

##### `SoftwarePackageCollection`<sup>Required</sup> <a name="SoftwarePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwarePackageCollection"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList SoftwarePackageCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList</a>

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContainsInput"></a>

```csharp
public string DisplayNameContainsInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsLatestInput`<sup>Optional</sup> <a name="IsLatestInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatestInput"></a>

```csharp
public object IsLatestInput { get; }
```

- *Type:* object

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceIdInput"></a>

```csharp
public string SoftwareSourceIdInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLatest`<sup>Required</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatest"></a>

```csharp
public object IsLatest { get; }
```

- *Type:* object

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SoftwareSourceId,
    string DisplayName = null,
    string DisplayNameContains = null,
    object Filter = null,
    string Id = null,
    object IsLatest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackages#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name_contains DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#id DataOciOsManagementHubSoftwareSourceSoftwarePackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.isLatest">IsLatest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#is_latest DataOciOsManagementHubSoftwareSourceSoftwarePackages#is_latest}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackages#software_source_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name_contains DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#filter DataOciOsManagementHubSoftwareSourceSoftwarePackages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#id DataOciOsManagementHubSoftwareSourceSoftwarePackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLatest`<sup>Optional</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.isLatest"></a>

```csharp
public object IsLatest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#is_latest DataOciOsManagementHubSoftwareSourceSoftwarePackages#is_latest}.

---

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#name DataOciOsManagementHubSoftwareSourceSoftwarePackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#values DataOciOsManagementHubSoftwareSourceSoftwarePackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#regex DataOciOsManagementHubSoftwareSourceSoftwarePackages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#name DataOciOsManagementHubSoftwareSourceSoftwarePackages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#values DataOciOsManagementHubSoftwareSourceSoftwarePackages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#regex DataOciOsManagementHubSoftwareSourceSoftwarePackages#regex}.

---

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection {

};
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems {

};
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies {

};
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles {

};
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependency">Dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyModifier">DependencyModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyType">DependencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependency"></a>

```csharp
public string Dependency { get; }
```

- *Type:* string

---

##### `DependencyModifier`<sup>Required</sup> <a name="DependencyModifier" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyModifier"></a>

```csharp
public string DependencyModifier { get; }
```

- *Type:* string

---

##### `DependencyType`<sup>Required</sup> <a name="DependencyType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyType"></a>

```csharp
public string DependencyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksumType">ChecksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `ChecksumType`<sup>Required</sup> <a name="ChecksumType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksumType"></a>

```csharp
public string ChecksumType { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksumType">ChecksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.dependencies">Dependencies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.files">Files</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.isLatest">IsLatest</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.lastModifiedDate">LastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.osFamilies">OsFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.softwareSources">SoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `ChecksumType`<sup>Required</sup> <a name="ChecksumType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksumType"></a>

```csharp
public string ChecksumType { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.dependencies"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList Dependencies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Files`<sup>Required</sup> <a name="Files" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.files"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList Files { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList</a>

---

##### `IsLatest`<sup>Required</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.isLatest"></a>

```csharp
public IResolvable IsLatest { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.lastModifiedDate"></a>

```csharp
public string LastModifiedDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsFamilies`<sup>Required</sup> <a name="OsFamilies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.osFamilies"></a>

```csharp
public string[] OsFamilies { get; }
```

- *Type:* string[]

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; }
```

- *Type:* string

---

##### `SoftwareSources`<sup>Required</sup> <a name="SoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.softwareSources"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList SoftwareSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```csharp
public IResolvable IsMandatoryForAutonomousLinux { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```csharp
public string SoftwareSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection</a>

---



