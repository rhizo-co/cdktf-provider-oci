# `dataOciFusionAppsFusionEnvironmentRefreshActivity` Submodule <a name="`dataOciFusionAppsFusionEnvironmentRefreshActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentRefreshActivity <a name="DataOciFusionAppsFusionEnvironmentRefreshActivity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity oci_fusion_apps_fusion_environment_refresh_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentRefreshActivity(Construct Scope, string Id, DataOciFusionAppsFusionEnvironmentRefreshActivityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig">DataOciFusionAppsFusionEnvironmentRefreshActivityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig">DataOciFusionAppsFusionEnvironmentRefreshActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentRefreshActivity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentRefreshActivity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentRefreshActivity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentRefreshActivity.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentRefreshActivity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentRefreshActivity resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentRefreshActivity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironmentRefreshActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentRefreshActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOpted">IsDataMaskingOpted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshIssueDetailsList">RefreshIssueDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList">DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.serviceAvailability">ServiceAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentId">SourceFusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeAccepted">TimeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeExpectedFinish">TimeExpectedFinish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeOfRestorationPoint">TimeOfRestorationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentIdInput">FusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityIdInput">RefreshActivityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityId">RefreshActivityId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDataMaskingOpted`<sup>Required</sup> <a name="IsDataMaskingOpted" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOpted"></a>

```csharp
public IResolvable IsDataMaskingOpted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `RefreshIssueDetailsList`<sup>Required</sup> <a name="RefreshIssueDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshIssueDetailsList"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList RefreshIssueDetailsList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList">DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList</a>

---

##### `ServiceAvailability`<sup>Required</sup> <a name="ServiceAvailability" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.serviceAvailability"></a>

```csharp
public string ServiceAvailability { get; }
```

- *Type:* string

---

##### `SourceFusionEnvironmentId`<sup>Required</sup> <a name="SourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentId"></a>

```csharp
public string SourceFusionEnvironmentId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeAccepted"></a>

```csharp
public string TimeAccepted { get; }
```

- *Type:* string

---

##### `TimeExpectedFinish`<sup>Required</sup> <a name="TimeExpectedFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeExpectedFinish"></a>

```csharp
public string TimeExpectedFinish { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `TimeOfRestorationPoint`<sup>Required</sup> <a name="TimeOfRestorationPoint" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeOfRestorationPoint"></a>

```csharp
public string TimeOfRestorationPoint { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `FusionEnvironmentIdInput`<sup>Optional</sup> <a name="FusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentIdInput"></a>

```csharp
public string FusionEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `RefreshActivityIdInput`<sup>Optional</sup> <a name="RefreshActivityIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityIdInput"></a>

```csharp
public string RefreshActivityIdInput { get; }
```

- *Type:* string

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentId"></a>

```csharp
public string FusionEnvironmentId { get; }
```

- *Type:* string

---

##### `RefreshActivityId`<sup>Required</sup> <a name="RefreshActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityId"></a>

```csharp
public string RefreshActivityId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentRefreshActivityConfig <a name="DataOciFusionAppsFusionEnvironmentRefreshActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentRefreshActivityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FusionEnvironmentId,
    string RefreshActivityId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentRefreshActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.refreshActivityId">RefreshActivityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#refresh_activity_id DataOciFusionAppsFusionEnvironmentRefreshActivity#refresh_activity_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.fusionEnvironmentId"></a>

```csharp
public string FusionEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentRefreshActivity#fusion_environment_id}.

---

##### `RefreshActivityId`<sup>Required</sup> <a name="RefreshActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.refreshActivityId"></a>

```csharp
public string RefreshActivityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#refresh_activity_id DataOciFusionAppsFusionEnvironmentRefreshActivity#refresh_activity_id}.

---

### DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct <a name="DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList <a name="DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference <a name="DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.refreshIssues">RefreshIssues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct">DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RefreshIssues`<sup>Required</sup> <a name="RefreshIssues" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.refreshIssues"></a>

```csharp
public string RefreshIssues { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct">DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct</a>

---



