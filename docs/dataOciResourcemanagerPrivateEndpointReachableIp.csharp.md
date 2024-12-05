# `dataOciResourcemanagerPrivateEndpointReachableIp` Submodule <a name="`dataOciResourcemanagerPrivateEndpointReachableIp` Submodule" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciResourcemanagerPrivateEndpointReachableIp <a name="DataOciResourcemanagerPrivateEndpointReachableIp" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip oci_resourcemanager_private_endpoint_reachable_ip}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourcemanagerPrivateEndpointReachableIp(Construct Scope, string Id, DataOciResourcemanagerPrivateEndpointReachableIpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig">DataOciResourcemanagerPrivateEndpointReachableIpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig">DataOciResourcemanagerPrivateEndpointReachableIpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciResourcemanagerPrivateEndpointReachableIp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciResourcemanagerPrivateEndpointReachableIp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciResourcemanagerPrivateEndpointReachableIp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciResourcemanagerPrivateEndpointReachableIp.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciResourcemanagerPrivateEndpointReachableIp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciResourcemanagerPrivateEndpointReachableIp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciResourcemanagerPrivateEndpointReachableIp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciResourcemanagerPrivateEndpointReachableIp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciResourcemanagerPrivateEndpointReachableIp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateEndpointIdInput"></a>

```csharp
public string PrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciResourcemanagerPrivateEndpointReachableIpConfig <a name="DataOciResourcemanagerPrivateEndpointReachableIpConfig" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourcemanagerPrivateEndpointReachableIpConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrivateEndpointId,
    string PrivateIp,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_endpoint_id DataOciResourcemanagerPrivateEndpointReachableIp#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_ip DataOciResourcemanagerPrivateEndpointReachableIp#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#id DataOciResourcemanagerPrivateEndpointReachableIp#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_endpoint_id DataOciResourcemanagerPrivateEndpointReachableIp#private_endpoint_id}.

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_ip DataOciResourcemanagerPrivateEndpointReachableIp#private_ip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#id DataOciResourcemanagerPrivateEndpointReachableIp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



