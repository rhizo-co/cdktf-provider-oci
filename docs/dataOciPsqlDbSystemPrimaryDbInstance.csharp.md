# `dataOciPsqlDbSystemPrimaryDbInstance` Submodule <a name="`dataOciPsqlDbSystemPrimaryDbInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDbSystemPrimaryDbInstance <a name="DataOciPsqlDbSystemPrimaryDbInstance" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance oci_psql_db_system_primary_db_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemPrimaryDbInstance(Construct Scope, string Id, DataOciPsqlDbSystemPrimaryDbInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig">DataOciPsqlDbSystemPrimaryDbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig">DataOciPsqlDbSystemPrimaryDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDbSystemPrimaryDbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlDbSystemPrimaryDbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlDbSystemPrimaryDbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlDbSystemPrimaryDbInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlDbSystemPrimaryDbInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciPsqlDbSystemPrimaryDbInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciPsqlDbSystemPrimaryDbInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciPsqlDbSystemPrimaryDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDbSystemPrimaryDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.dbInstanceId">DbInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DbInstanceId`<sup>Required</sup> <a name="DbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.dbInstanceId"></a>

```csharp
public string DbInstanceId { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDbSystemPrimaryDbInstanceConfig <a name="DataOciPsqlDbSystemPrimaryDbInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemPrimaryDbInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DbSystemId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance#db_system_id DataOciPsqlDbSystemPrimaryDbInstance#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance#id DataOciPsqlDbSystemPrimaryDbInstance#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance#db_system_id DataOciPsqlDbSystemPrimaryDbInstance#db_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemPrimaryDbInstance.DataOciPsqlDbSystemPrimaryDbInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance#id DataOciPsqlDbSystemPrimaryDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


