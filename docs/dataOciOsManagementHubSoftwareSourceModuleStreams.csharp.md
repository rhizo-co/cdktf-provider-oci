# `dataOciOsManagementHubSoftwareSourceModuleStreams` Submodule <a name="`dataOciOsManagementHubSoftwareSourceModuleStreams` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreams <a name="DataOciOsManagementHubSoftwareSourceModuleStreams" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams oci_os_management_hub_software_source_module_streams}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreams(Construct Scope, string Id, DataOciOsManagementHubSoftwareSourceModuleStreamsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig">DataOciOsManagementHubSoftwareSourceModuleStreamsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig">DataOciOsManagementHubSoftwareSourceModuleStreamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetIsLatest">ResetIsLatest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetModuleName">ResetModuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetModuleNameContains">ResetModuleNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLatest` <a name="ResetIsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetIsLatest"></a>

```csharp
private void ResetIsLatest()
```

##### `ResetModuleName` <a name="ResetModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetModuleName"></a>

```csharp
private void ResetModuleName()
```

##### `ResetModuleNameContains` <a name="ResetModuleNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetModuleNameContains"></a>

```csharp
private void ResetModuleNameContains()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceModuleStreams resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourceModuleStreams.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourceModuleStreams.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourceModuleStreams.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourceModuleStreams.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceModuleStreams resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceModuleStreams to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubSoftwareSourceModuleStreams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceModuleStreams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList">DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleStreamCollection">ModuleStreamCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.isLatestInput">IsLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameContainsInput">ModuleNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameInput">ModuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.isLatest">IsLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameContains">ModuleNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.filter"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList">DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList</a>

---

##### `ModuleStreamCollection`<sup>Required</sup> <a name="ModuleStreamCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleStreamCollection"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList ModuleStreamCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsLatestInput`<sup>Optional</sup> <a name="IsLatestInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.isLatestInput"></a>

```csharp
public object IsLatestInput { get; }
```

- *Type:* object

---

##### `ModuleNameContainsInput`<sup>Optional</sup> <a name="ModuleNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameContainsInput"></a>

```csharp
public string ModuleNameContainsInput { get; }
```

- *Type:* string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameInput"></a>

```csharp
public string ModuleNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.softwareSourceIdInput"></a>

```csharp
public string SoftwareSourceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLatest`<sup>Required</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.isLatest"></a>

```csharp
public object IsLatest { get; }
```

- *Type:* object

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `ModuleNameContains`<sup>Required</sup> <a name="ModuleNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameContains"></a>

```csharp
public string ModuleNameContains { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreamsConfig <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SoftwareSourceId,
    object Filter = null,
    string Id = null,
    object IsLatest = null,
    string ModuleName = null,
    string ModuleNameContains = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreams#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#id DataOciOsManagementHubSoftwareSourceModuleStreams#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.isLatest">IsLatest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#is_latest DataOciOsManagementHubSoftwareSourceModuleStreams#is_latest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.moduleName">ModuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name DataOciOsManagementHubSoftwareSourceModuleStreams#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.moduleNameContains">ModuleNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name_contains DataOciOsManagementHubSoftwareSourceModuleStreams#module_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreams#software_source_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#filter DataOciOsManagementHubSoftwareSourceModuleStreams#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#id DataOciOsManagementHubSoftwareSourceModuleStreams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLatest`<sup>Optional</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.isLatest"></a>

```csharp
public object IsLatest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#is_latest DataOciOsManagementHubSoftwareSourceModuleStreams#is_latest}.

---

##### `ModuleName`<sup>Optional</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.moduleName"></a>

```csharp
public string ModuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name DataOciOsManagementHubSoftwareSourceModuleStreams#module_name}.

---

##### `ModuleNameContains`<sup>Optional</sup> <a name="ModuleNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.moduleNameContains"></a>

```csharp
public string ModuleNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name_contains DataOciOsManagementHubSoftwareSourceModuleStreams#module_name_contains}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}.

---

### DataOciOsManagementHubSoftwareSourceModuleStreamsFilter <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#values DataOciOsManagementHubSoftwareSourceModuleStreams#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#regex DataOciOsManagementHubSoftwareSourceModuleStreams#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#values DataOciOsManagementHubSoftwareSourceModuleStreams#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#regex DataOciOsManagementHubSoftwareSourceModuleStreams#regex}.

---

### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection {

};
```


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.archType">ArchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.isLatest">IsLatest</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.packages">Packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.profiles">Profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.archType"></a>

```csharp
public string ArchType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLatest`<sup>Required</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.isLatest"></a>

```csharp
public IResolvable IsLatest { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.packages"></a>

```csharp
public string[] Packages { get; }
```

- *Type:* string[]

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.profiles"></a>

```csharp
public string[] Profiles { get; }
```

- *Type:* string[]

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection</a>

---



