# `dataOciDatabaseExadataInfrastructureUnAllocatedResource` Submodule <a name="`dataOciDatabaseExadataInfrastructureUnAllocatedResource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadataInfrastructureUnAllocatedResource <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource oci_database_exadata_infrastructure_un_allocated_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExadataInfrastructureUnAllocatedResource(Construct Scope, string Id, DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig">DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig">DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetDbServers">ResetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDbServers` <a name="ResetDbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetDbServers"></a>

```csharp
private void ResetDbServers()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExadataInfrastructureUnAllocatedResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExadataInfrastructureUnAllocatedResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExadataInfrastructureUnAllocatedResource.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseExadataInfrastructureUnAllocatedResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExadataInfrastructureUnAllocatedResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExadataInfrastructureUnAllocatedResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadataInfrastructureUnAllocatedResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.autonomousVmClusters">AutonomousVmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList">DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs">ExadataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.localStorageInGbs">LocalStorageInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dbServersInput">DbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataInfrastructureIdInput">ExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dbServers">DbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousVmClusters`<sup>Required</sup> <a name="AutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.autonomousVmClusters"></a>

```csharp
public DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList AutonomousVmClusters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList">DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExadataStorageInTbs`<sup>Required</sup> <a name="ExadataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs"></a>

```csharp
public double ExadataStorageInTbs { get; }
```

- *Type:* double

---

##### `LocalStorageInGbs`<sup>Required</sup> <a name="LocalStorageInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.localStorageInGbs"></a>

```csharp
public double LocalStorageInGbs { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dbServersInput"></a>

```csharp
public string[] DbServersInput { get; }
```

- *Type:* string[]

---

##### `ExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataInfrastructureIdInput"></a>

```csharp
public string ExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dbServers"></a>

```csharp
public string[] DbServers { get; }
```

- *Type:* string[]

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters {

};
```


### DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExadataInfrastructureId,
    string[] DbServers = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#exadata_infrastructure_id DataOciDatabaseExadataInfrastructureUnAllocatedResource#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.dbServers">DbServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseExadataInfrastructureUnAllocatedResource#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseExadataInfrastructureUnAllocatedResource#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#exadata_infrastructure_id DataOciDatabaseExadataInfrastructureUnAllocatedResource#exadata_infrastructure_id}.

---

##### `DbServers`<sup>Optional</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.dbServers"></a>

```csharp
public string[] DbServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseExadataInfrastructureUnAllocatedResource#db_servers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseExadataInfrastructureUnAllocatedResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.get"></a>

```csharp
private DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs">UnAllocatedAdbStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters">DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UnAllocatedAdbStorageInTbs`<sup>Required</sup> <a name="UnAllocatedAdbStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs"></a>

```csharp
public double UnAllocatedAdbStorageInTbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters">DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters</a>

---



