# `dataOciOsmanagementSoftwareSourceStreamProfiles` Submodule <a name="`dataOciOsmanagementSoftwareSourceStreamProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementSoftwareSourceStreamProfiles <a name="DataOciOsmanagementSoftwareSourceStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles oci_osmanagement_software_source_stream_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementSoftwareSourceStreamProfiles(Construct Scope, string Id, DataOciOsmanagementSoftwareSourceStreamProfilesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig">DataOciOsmanagementSoftwareSourceStreamProfilesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig">DataOciOsmanagementSoftwareSourceStreamProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetModuleName">ResetModuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetProfileName">ResetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetStreamName">ResetStreamName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetModuleName` <a name="ResetModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetModuleName"></a>

```csharp
private void ResetModuleName()
```

##### `ResetProfileName` <a name="ResetProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetProfileName"></a>

```csharp
private void ResetProfileName()
```

##### `ResetStreamName` <a name="ResetStreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetStreamName"></a>

```csharp
private void ResetStreamName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceStreamProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsmanagementSoftwareSourceStreamProfiles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsmanagementSoftwareSourceStreamProfiles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsmanagementSoftwareSourceStreamProfiles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsmanagementSoftwareSourceStreamProfiles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceStreamProfiles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsmanagementSoftwareSourceStreamProfiles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsmanagementSoftwareSourceStreamProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementSoftwareSourceStreamProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList">DataOciOsmanagementSoftwareSourceStreamProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleStreamProfiles">ModuleStreamProfiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleNameInput">ModuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileNameInput">ProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filter"></a>

```csharp
public DataOciOsmanagementSoftwareSourceStreamProfilesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList">DataOciOsmanagementSoftwareSourceStreamProfilesFilterList</a>

---

##### `ModuleStreamProfiles`<sup>Required</sup> <a name="ModuleStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleStreamProfiles"></a>

```csharp
public DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList ModuleStreamProfiles { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleNameInput"></a>

```csharp
public string ModuleNameInput { get; }
```

- *Type:* string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileNameInput"></a>

```csharp
public string ProfileNameInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceIdInput"></a>

```csharp
public string SoftwareSourceIdInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementSoftwareSourceStreamProfilesConfig <a name="DataOciOsmanagementSoftwareSourceStreamProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementSoftwareSourceStreamProfilesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SoftwareSourceId,
    string CompartmentId = null,
    object Filter = null,
    string Id = null,
    string ModuleName = null,
    string ProfileName = null,
    string StreamName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.moduleName">ModuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.profileName">ProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.streamName">StreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#filter DataOciOsmanagementSoftwareSourceStreamProfiles#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModuleName`<sup>Optional</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.moduleName"></a>

```csharp
public string ModuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}.

---

##### `ProfileName`<sup>Optional</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.profileName"></a>

```csharp
public string ProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}.

---

##### `StreamName`<sup>Optional</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}.

---

### DataOciOsmanagementSoftwareSourceStreamProfilesFilter <a name="DataOciOsmanagementSoftwareSourceStreamProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementSoftwareSourceStreamProfilesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#name DataOciOsmanagementSoftwareSourceStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#values DataOciOsmanagementSoftwareSourceStreamProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#regex DataOciOsmanagementSoftwareSourceStreamProfiles#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#name DataOciOsmanagementSoftwareSourceStreamProfiles#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#values DataOciOsmanagementSoftwareSourceStreamProfiles#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#regex DataOciOsmanagementSoftwareSourceStreamProfiles#regex}.

---

### DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles <a name="DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementSoftwareSourceStreamProfilesFilterList <a name="DataOciOsmanagementSoftwareSourceStreamProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementSoftwareSourceStreamProfilesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.get"></a>

```csharp
private DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference <a name="DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList <a name="DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.get"></a>

```csharp
private DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference <a name="DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles</a>

---



