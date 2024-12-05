# `dataOciDatabaseToolsDatabaseToolsPrivateEndpoints` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpoints <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints oci_database_tools_database_tools_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpoints(Construct Scope, string Id, DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetEndpointServiceId">ResetEndpointServiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEndpointServiceId` <a name="ResetEndpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetEndpointServiceId"></a>

```csharp
private void ResetEndpointServiceId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseToolsDatabaseToolsPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.databaseToolsPrivateEndpointCollection">DatabaseToolsPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceIdInput">EndpointServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceId">EndpointServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatabaseToolsPrivateEndpointCollection`<sup>Required</sup> <a name="DatabaseToolsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.databaseToolsPrivateEndpointCollection"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList DatabaseToolsPrivateEndpointCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filter"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndpointServiceIdInput`<sup>Optional</sup> <a name="EndpointServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceIdInput"></a>

```csharp
public string EndpointServiceIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndpointServiceId`<sup>Required</sup> <a name="EndpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceId"></a>

```csharp
public string EndpointServiceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    string EndpointServiceId = null,
    object Filter = null,
    string Id = null,
    string State = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.endpointServiceId">EndpointServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}.

---

##### `EndpointServiceId`<sup>Optional</sup> <a name="EndpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.endpointServiceId"></a>

```csharp
public string EndpointServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#filter DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}.

---

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection {

};
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems {

};
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks {

};
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration {

};
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps {

};
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#values DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#regex DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#values DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#regex DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.additionalFqdns">AdditionalFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointFqdn">EndpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointServiceId">EndpointServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointVnicId">PrivateEndpointVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.reverseConnectionConfiguration">ReverseConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalFqdns`<sup>Required</sup> <a name="AdditionalFqdns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.additionalFqdns"></a>

```csharp
public string[] AdditionalFqdns { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndpointFqdn`<sup>Required</sup> <a name="EndpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointFqdn"></a>

```csharp
public string EndpointFqdn { get; }
```

- *Type:* string

---

##### `EndpointServiceId`<sup>Required</sup> <a name="EndpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointServiceId"></a>

```csharp
public string EndpointServiceId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.locks"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList</a>

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointVnicId`<sup>Required</sup> <a name="PrivateEndpointVnicId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointVnicId"></a>

```csharp
public string PrivateEndpointVnicId { get; }
```

- *Type:* string

---

##### `ReverseConnectionConfiguration`<sup>Required</sup> <a name="ReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.reverseConnectionConfiguration"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList ReverseConnectionConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps">ReverseConnectionsSourceIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReverseConnectionsSourceIps`<sup>Required</sup> <a name="ReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList ReverseConnectionsSourceIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp">SourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp"></a>

```csharp
public string SourceIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get"></a>

```csharp
private DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



