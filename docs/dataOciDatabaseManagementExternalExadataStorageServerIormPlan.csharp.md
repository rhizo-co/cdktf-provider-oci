# `dataOciDatabaseManagementExternalExadataStorageServerIormPlan` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageServerIormPlan` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerIormPlan <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan oci_database_management_external_exadata_storage_server_iorm_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataStorageServerIormPlan(Construct Scope, string Id, DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig">DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig">DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerIormPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalExadataStorageServerIormPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalExadataStorageServerIormPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalExadataStorageServerIormPlan.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalExadataStorageServerIormPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerIormPlan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageServerIormPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalExadataStorageServerIormPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageServerIormPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dbPlan">DbPlan</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planObjective">PlanObjective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planStatus">PlanStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerIdInput">ExternalExadataStorageServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerId">ExternalExadataStorageServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DbPlan`<sup>Required</sup> <a name="DbPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dbPlan"></a>

```csharp
public DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList DbPlan { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList</a>

---

##### `PlanObjective`<sup>Required</sup> <a name="PlanObjective" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planObjective"></a>

```csharp
public string PlanObjective { get; }
```

- *Type:* string

---

##### `PlanStatus`<sup>Required</sup> <a name="PlanStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planStatus"></a>

```csharp
public string PlanStatus { get; }
```

- *Type:* string

---

##### `ExternalExadataStorageServerIdInput`<sup>Optional</sup> <a name="ExternalExadataStorageServerIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerIdInput"></a>

```csharp
public string ExternalExadataStorageServerIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ExternalExadataStorageServerId`<sup>Required</sup> <a name="ExternalExadataStorageServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerId"></a>

```csharp
public string ExternalExadataStorageServerId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExternalExadataStorageServerId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.externalExadataStorageServerId">ExternalExadataStorageServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#external_exadata_storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExternalExadataStorageServerId`<sup>Required</sup> <a name="ExternalExadataStorageServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.externalExadataStorageServerId"></a>

```csharp
public string ExternalExadataStorageServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#external_exadata_storage_server_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan {

};
```


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.get"></a>

```csharp
private DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.allocation">Allocation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.asmCluster">AsmCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheMin">FlashCacheMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheSize">FlashCacheSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashCacheOn">IsFlashCacheOn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashLogOn">IsFlashLogOn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemCacheOn">IsPmemCacheOn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemLogOn">IsPmemLogOn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.level">Level</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheLimit">PmemCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheMin">PmemCacheMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheSize">PmemCacheSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.share">Share</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allocation`<sup>Required</sup> <a name="Allocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.allocation"></a>

```csharp
public double Allocation { get; }
```

- *Type:* double

---

##### `AsmCluster`<sup>Required</sup> <a name="AsmCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.asmCluster"></a>

```csharp
public string AsmCluster { get; }
```

- *Type:* string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheLimit"></a>

```csharp
public string FlashCacheLimit { get; }
```

- *Type:* string

---

##### `FlashCacheMin`<sup>Required</sup> <a name="FlashCacheMin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheMin"></a>

```csharp
public string FlashCacheMin { get; }
```

- *Type:* string

---

##### `FlashCacheSize`<sup>Required</sup> <a name="FlashCacheSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheSize"></a>

```csharp
public string FlashCacheSize { get; }
```

- *Type:* string

---

##### `IsFlashCacheOn`<sup>Required</sup> <a name="IsFlashCacheOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashCacheOn"></a>

```csharp
public IResolvable IsFlashCacheOn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsFlashLogOn`<sup>Required</sup> <a name="IsFlashLogOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashLogOn"></a>

```csharp
public IResolvable IsFlashLogOn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPmemCacheOn`<sup>Required</sup> <a name="IsPmemCacheOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemCacheOn"></a>

```csharp
public IResolvable IsPmemCacheOn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPmemLogOn`<sup>Required</sup> <a name="IsPmemLogOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemLogOn"></a>

```csharp
public IResolvable IsPmemLogOn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Level`<sup>Required</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.level"></a>

```csharp
public double Level { get; }
```

- *Type:* double

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PmemCacheLimit`<sup>Required</sup> <a name="PmemCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheLimit"></a>

```csharp
public string PmemCacheLimit { get; }
```

- *Type:* string

---

##### `PmemCacheMin`<sup>Required</sup> <a name="PmemCacheMin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheMin"></a>

```csharp
public string PmemCacheMin { get; }
```

- *Type:* string

---

##### `PmemCacheSize`<sup>Required</sup> <a name="PmemCacheSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheSize"></a>

```csharp
public string PmemCacheSize { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Share`<sup>Required</sup> <a name="Share" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.share"></a>

```csharp
public double Share { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems</a>

---


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.get"></a>

```csharp
private DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan</a>

---



