# `dataOciFusionAppsFusionEnvironmentAdminUser` Submodule <a name="`dataOciFusionAppsFusionEnvironmentAdminUser` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentAdminUser <a name="DataOciFusionAppsFusionEnvironmentAdminUser" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_user oci_fusion_apps_fusion_environment_admin_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentAdminUser(Construct Scope, string Id, DataOciFusionAppsFusionEnvironmentAdminUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig">DataOciFusionAppsFusionEnvironmentAdminUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig">DataOciFusionAppsFusionEnvironmentAdminUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentAdminUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentAdminUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentAdminUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentAdminUser.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentAdminUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentAdminUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentAdminUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironmentAdminUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentAdminUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList">DataOciFusionAppsFusionEnvironmentAdminUserItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentIdInput">FusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.items"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentAdminUserItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList">DataOciFusionAppsFusionEnvironmentAdminUserItemsList</a>

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `FusionEnvironmentIdInput`<sup>Optional</sup> <a name="FusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentIdInput"></a>

```csharp
public string FusionEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentId"></a>

```csharp
public string FusionEnvironmentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentAdminUserConfig <a name="DataOciFusionAppsFusionEnvironmentAdminUserConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentAdminUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FusionEnvironmentId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_user#fusion_environment_id DataOciFusionAppsFusionEnvironmentAdminUser#fusion_environment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserConfig.property.fusionEnvironmentId"></a>

```csharp
public string FusionEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_user#fusion_environment_id DataOciFusionAppsFusionEnvironmentAdminUser#fusion_environment_id}.

---

### DataOciFusionAppsFusionEnvironmentAdminUserItems <a name="DataOciFusionAppsFusionEnvironmentAdminUserItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentAdminUserItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentAdminUserItemsList <a name="DataOciFusionAppsFusionEnvironmentAdminUserItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentAdminUserItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItems">DataOciFusionAppsFusionEnvironmentAdminUserItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentAdminUserItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUser.DataOciFusionAppsFusionEnvironmentAdminUserItems">DataOciFusionAppsFusionEnvironmentAdminUserItems</a>

---



