# `dataOciRecoveryProtectedDatabaseFetchConfiguration` Submodule <a name="`dataOciRecoveryProtectedDatabaseFetchConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryProtectedDatabaseFetchConfiguration <a name="DataOciRecoveryProtectedDatabaseFetchConfiguration" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration oci_recovery_protected_database_fetch_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabaseFetchConfiguration(Construct Scope, string Id, DataOciRecoveryProtectedDatabaseFetchConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig">DataOciRecoveryProtectedDatabaseFetchConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig">DataOciRecoveryProtectedDatabaseFetchConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetBase64EncodeContent">ResetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetConfigurationType">ResetConfigurationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBase64EncodeContent` <a name="ResetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetBase64EncodeContent"></a>

```csharp
private void ResetBase64EncodeContent()
```

##### `ResetConfigurationType` <a name="ResetConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetConfigurationType"></a>

```csharp
private void ResetConfigurationType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryProtectedDatabaseFetchConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRecoveryProtectedDatabaseFetchConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRecoveryProtectedDatabaseFetchConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRecoveryProtectedDatabaseFetchConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRecoveryProtectedDatabaseFetchConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciRecoveryProtectedDatabaseFetchConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciRecoveryProtectedDatabaseFetchConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciRecoveryProtectedDatabaseFetchConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryProtectedDatabaseFetchConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.base64EncodeContentInput">Base64EncodeContentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.configurationTypeInput">ConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.protectedDatabaseIdInput">ProtectedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.configurationType">ConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.protectedDatabaseId">ProtectedDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Base64EncodeContentInput`<sup>Optional</sup> <a name="Base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.base64EncodeContentInput"></a>

```csharp
public object Base64EncodeContentInput { get; }
```

- *Type:* object

---

##### `ConfigurationTypeInput`<sup>Optional</sup> <a name="ConfigurationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.configurationTypeInput"></a>

```csharp
public string ConfigurationTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProtectedDatabaseIdInput`<sup>Optional</sup> <a name="ProtectedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.protectedDatabaseIdInput"></a>

```csharp
public string ProtectedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `Base64EncodeContent`<sup>Required</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.base64EncodeContent"></a>

```csharp
public object Base64EncodeContent { get; }
```

- *Type:* object

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.configurationType"></a>

```csharp
public string ConfigurationType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProtectedDatabaseId`<sup>Required</sup> <a name="ProtectedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.protectedDatabaseId"></a>

```csharp
public string ProtectedDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryProtectedDatabaseFetchConfigurationConfig <a name="DataOciRecoveryProtectedDatabaseFetchConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabaseFetchConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProtectedDatabaseId,
    object Base64EncodeContent = null,
    string ConfigurationType = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.protectedDatabaseId">ProtectedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#protected_database_id DataOciRecoveryProtectedDatabaseFetchConfiguration#protected_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#base64_encode_content DataOciRecoveryProtectedDatabaseFetchConfiguration#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.configurationType">ConfigurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#configuration_type DataOciRecoveryProtectedDatabaseFetchConfiguration#configuration_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#id DataOciRecoveryProtectedDatabaseFetchConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProtectedDatabaseId`<sup>Required</sup> <a name="ProtectedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.protectedDatabaseId"></a>

```csharp
public string ProtectedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#protected_database_id DataOciRecoveryProtectedDatabaseFetchConfiguration#protected_database_id}.

---

##### `Base64EncodeContent`<sup>Optional</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.base64EncodeContent"></a>

```csharp
public object Base64EncodeContent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#base64_encode_content DataOciRecoveryProtectedDatabaseFetchConfiguration#base64_encode_content}.

---

##### `ConfigurationType`<sup>Optional</sup> <a name="ConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.configurationType"></a>

```csharp
public string ConfigurationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#configuration_type DataOciRecoveryProtectedDatabaseFetchConfiguration#configuration_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#id DataOciRecoveryProtectedDatabaseFetchConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



