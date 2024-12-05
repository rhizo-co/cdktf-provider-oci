# `dataOciOsmanagementManagedInstanceStreamProfiles` Submodule <a name="`dataOciOsmanagementManagedInstanceStreamProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceStreamProfiles <a name="DataOciOsmanagementManagedInstanceStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles oci_osmanagement_managed_instance_stream_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementManagedInstanceStreamProfiles(Construct Scope, string Id, DataOciOsmanagementManagedInstanceStreamProfilesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig">DataOciOsmanagementManagedInstanceStreamProfilesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig">DataOciOsmanagementManagedInstanceStreamProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetModuleName">ResetModuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileName">ResetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileStatus">ResetProfileStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetStreamName">ResetStreamName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetModuleName` <a name="ResetModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetModuleName"></a>

```csharp
private void ResetModuleName()
```

##### `ResetProfileName` <a name="ResetProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileName"></a>

```csharp
private void ResetProfileName()
```

##### `ResetProfileStatus` <a name="ResetProfileStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileStatus"></a>

```csharp
private void ResetProfileStatus()
```

##### `ResetStreamName` <a name="ResetStreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetStreamName"></a>

```csharp
private void ResetStreamName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceStreamProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsmanagementManagedInstanceStreamProfiles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsmanagementManagedInstanceStreamProfiles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsmanagementManagedInstanceStreamProfiles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsmanagementManagedInstanceStreamProfiles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceStreamProfiles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceStreamProfiles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsmanagementManagedInstanceStreamProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceStreamProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList">DataOciOsmanagementManagedInstanceStreamProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleStreamProfileOnManagedInstances">ModuleStreamProfileOnManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleNameInput">ModuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileNameInput">ProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatusInput">ProfileStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatus">ProfileStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filter"></a>

```csharp
public DataOciOsmanagementManagedInstanceStreamProfilesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList">DataOciOsmanagementManagedInstanceStreamProfilesFilterList</a>

---

##### `ModuleStreamProfileOnManagedInstances`<sup>Required</sup> <a name="ModuleStreamProfileOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleStreamProfileOnManagedInstances"></a>

```csharp
public DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList ModuleStreamProfileOnManagedInstances { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleNameInput"></a>

```csharp
public string ModuleNameInput { get; }
```

- *Type:* string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileNameInput"></a>

```csharp
public string ProfileNameInput { get; }
```

- *Type:* string

---

##### `ProfileStatusInput`<sup>Optional</sup> <a name="ProfileStatusInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatusInput"></a>

```csharp
public string ProfileStatusInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `ProfileStatus`<sup>Required</sup> <a name="ProfileStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatus"></a>

```csharp
public string ProfileStatus { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceStreamProfilesConfig <a name="DataOciOsmanagementManagedInstanceStreamProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementManagedInstanceStreamProfilesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    string CompartmentId = null,
    object Filter = null,
    string Id = null,
    string ModuleName = null,
    string ProfileName = null,
    string ProfileStatus = null,
    string StreamName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.moduleName">ModuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileName">ProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileStatus">ProfileStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.streamName">StreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#filter DataOciOsmanagementManagedInstanceStreamProfiles#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModuleName`<sup>Optional</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.moduleName"></a>

```csharp
public string ModuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}.

---

##### `ProfileName`<sup>Optional</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileName"></a>

```csharp
public string ProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}.

---

##### `ProfileStatus`<sup>Optional</sup> <a name="ProfileStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileStatus"></a>

```csharp
public string ProfileStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}.

---

##### `StreamName`<sup>Optional</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}.

---

### DataOciOsmanagementManagedInstanceStreamProfilesFilter <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementManagedInstanceStreamProfilesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#name DataOciOsmanagementManagedInstanceStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#values DataOciOsmanagementManagedInstanceStreamProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#regex DataOciOsmanagementManagedInstanceStreamProfiles#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#name DataOciOsmanagementManagedInstanceStreamProfiles#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#values DataOciOsmanagementManagedInstanceStreamProfiles#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#regex DataOciOsmanagementManagedInstanceStreamProfiles#regex}.

---

### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceStreamProfilesFilterList <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementManagedInstanceStreamProfilesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get"></a>

```csharp
private DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get"></a>

```csharp
private DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances</a>

---



