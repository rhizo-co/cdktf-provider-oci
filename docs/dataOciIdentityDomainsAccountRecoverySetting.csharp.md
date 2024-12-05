# `dataOciIdentityDomainsAccountRecoverySetting` Submodule <a name="`dataOciIdentityDomainsAccountRecoverySetting` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAccountRecoverySetting <a name="DataOciIdentityDomainsAccountRecoverySetting" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting oci_identity_domains_account_recovery_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySetting(Construct Scope, string Id, DataOciIdentityDomainsAccountRecoverySettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig">DataOciIdentityDomainsAccountRecoverySettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig">DataOciIdentityDomainsAccountRecoverySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAccountRecoverySetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsAccountRecoverySetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsAccountRecoverySetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsAccountRecoverySetting.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsAccountRecoverySetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsAccountRecoverySetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsAccountRecoverySetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsAccountRecoverySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAccountRecoverySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.factors">Factors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList">DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList">DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.lockoutDuration">LockoutDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.maxIncorrectAttempts">MaxIncorrectAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList">DataOciIdentityDomainsAccountRecoverySettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList">DataOciIdentityDomainsAccountRecoverySettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.accountRecoverySettingIdInput">AccountRecoverySettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.accountRecoverySettingId">AccountRecoverySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Factors`<sup>Required</sup> <a name="Factors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.factors"></a>

```csharp
public string[] Factors { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList">DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList">DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `LockoutDuration`<sup>Required</sup> <a name="LockoutDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.lockoutDuration"></a>

```csharp
public double LockoutDuration { get; }
```

- *Type:* double

---

##### `MaxIncorrectAttempts`<sup>Required</sup> <a name="MaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.maxIncorrectAttempts"></a>

```csharp
public double MaxIncorrectAttempts { get; }
```

- *Type:* double

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.meta"></a>

```csharp
public DataOciIdentityDomainsAccountRecoverySettingMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList">DataOciIdentityDomainsAccountRecoverySettingMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.tags"></a>

```csharp
public DataOciIdentityDomainsAccountRecoverySettingTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList">DataOciIdentityDomainsAccountRecoverySettingTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `AccountRecoverySettingIdInput`<sup>Optional</sup> <a name="AccountRecoverySettingIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.accountRecoverySettingIdInput"></a>

```csharp
public string AccountRecoverySettingIdInput { get; }
```

- *Type:* string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `AccountRecoverySettingId`<sup>Required</sup> <a name="AccountRecoverySettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.accountRecoverySettingId"></a>

```csharp
public string AccountRecoverySettingId { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAccountRecoverySettingConfig <a name="DataOciIdentityDomainsAccountRecoverySettingConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountRecoverySettingId,
    string IdcsEndpoint,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string ResourceTypeSchemaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.accountRecoverySettingId">AccountRecoverySettingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#account_recovery_setting_id DataOciIdentityDomainsAccountRecoverySetting#account_recovery_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#idcs_endpoint DataOciIdentityDomainsAccountRecoverySetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#attributes DataOciIdentityDomainsAccountRecoverySetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#attribute_sets DataOciIdentityDomainsAccountRecoverySetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#authorization DataOciIdentityDomainsAccountRecoverySetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#resource_type_schema_version DataOciIdentityDomainsAccountRecoverySetting#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountRecoverySettingId`<sup>Required</sup> <a name="AccountRecoverySettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.accountRecoverySettingId"></a>

```csharp
public string AccountRecoverySettingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#account_recovery_setting_id DataOciIdentityDomainsAccountRecoverySetting#account_recovery_setting_id}.

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#idcs_endpoint DataOciIdentityDomainsAccountRecoverySetting#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#attributes DataOciIdentityDomainsAccountRecoverySetting#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#attribute_sets DataOciIdentityDomainsAccountRecoverySetting#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#authorization DataOciIdentityDomainsAccountRecoverySetting#authorization}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_setting#resource_type_schema_version DataOciIdentityDomainsAccountRecoverySetting#resource_type_schema_version}.

---

### DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy <a name="DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy {

};
```


### DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy <a name="DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsAccountRecoverySettingMeta <a name="DataOciIdentityDomainsAccountRecoverySettingMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingMeta {

};
```


### DataOciIdentityDomainsAccountRecoverySettingTags <a name="DataOciIdentityDomainsAccountRecoverySettingTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList <a name="DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy">DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy">DataOciIdentityDomainsAccountRecoverySettingIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList <a name="DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy">DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy">DataOciIdentityDomainsAccountRecoverySettingIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAccountRecoverySettingMetaList <a name="DataOciIdentityDomainsAccountRecoverySettingMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.get"></a>

```csharp
private DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMeta">DataOciIdentityDomainsAccountRecoverySettingMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsAccountRecoverySettingMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingMeta">DataOciIdentityDomainsAccountRecoverySettingMeta</a>

---


### DataOciIdentityDomainsAccountRecoverySettingTagsList <a name="DataOciIdentityDomainsAccountRecoverySettingTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.get"></a>

```csharp
private DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTags">DataOciIdentityDomainsAccountRecoverySettingTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsAccountRecoverySettingTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySetting.DataOciIdentityDomainsAccountRecoverySettingTags">DataOciIdentityDomainsAccountRecoverySettingTags</a>

---



