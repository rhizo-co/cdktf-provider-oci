# `dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource` Submodule <a name="`dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource oci_database_cloud_exadata_infrastructure_un_allocated_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource(Construct Scope, string Id, DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetDbServers">ResetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDbServers` <a name="ResetDbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetDbServers"></a>

```csharp
private void ResetDbServers()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudAutonomousVmClusters">CloudAutonomousVmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureDisplayName">CloudExadataInfrastructureDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs">ExadataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.localStorageInGbs">LocalStorageInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServersInput">DbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServers">DbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CloudAutonomousVmClusters`<sup>Required</sup> <a name="CloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudAutonomousVmClusters"></a>

```csharp
public DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList CloudAutonomousVmClusters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList</a>

---

##### `CloudExadataInfrastructureDisplayName`<sup>Required</sup> <a name="CloudExadataInfrastructureDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureDisplayName"></a>

```csharp
public string CloudExadataInfrastructureDisplayName { get; }
```

- *Type:* string

---

##### `ExadataStorageInTbs`<sup>Required</sup> <a name="ExadataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs"></a>

```csharp
public double ExadataStorageInTbs { get; }
```

- *Type:* double

---

##### `LocalStorageInGbs`<sup>Required</sup> <a name="LocalStorageInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.localStorageInGbs"></a>

```csharp
public double LocalStorageInGbs { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureIdInput"></a>

```csharp
public string CloudExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServersInput"></a>

```csharp
public string[] DbServersInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServers"></a>

```csharp
public string[] DbServers { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters {

};
```


### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloudExadataInfrastructureId,
    string[] DbServers = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#cloud_exadata_infrastructure_id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dbServers">DbServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#cloud_exadata_infrastructure_id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#cloud_exadata_infrastructure_id}.

---

##### `DbServers`<sup>Optional</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dbServers"></a>

```csharp
public string[] DbServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#db_servers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.get"></a>

```csharp
private DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs">UnAllocatedAdbStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UnAllocatedAdbStorageInTbs`<sup>Required</sup> <a name="UnAllocatedAdbStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs"></a>

```csharp
public double UnAllocatedAdbStorageInTbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters</a>

---



