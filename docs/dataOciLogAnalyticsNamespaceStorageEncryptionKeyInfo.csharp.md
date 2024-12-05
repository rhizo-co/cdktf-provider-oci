# `dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo` Submodule <a name="`dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info oci_log_analytics_namespace_storage_encryption_key_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo(Construct Scope, string Id, DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.items"></a>

```csharp
public DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Namespace,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get"></a>

```csharp
private DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keySource">KeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeySource`<sup>Required</sup> <a name="KeySource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keySource"></a>

```csharp
public string KeySource { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems</a>

---



