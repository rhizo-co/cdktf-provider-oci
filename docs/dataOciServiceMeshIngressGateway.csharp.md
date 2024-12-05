# `dataOciServiceMeshIngressGateway` Submodule <a name="`dataOciServiceMeshIngressGateway` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGateway <a name="DataOciServiceMeshIngressGateway" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway oci_service_mesh_ingress_gateway}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGateway(Construct Scope, string Id, DataOciServiceMeshIngressGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig">DataOciServiceMeshIngressGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig">DataOciServiceMeshIngressGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGateway.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceMeshIngressGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceMeshIngressGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.accessLogging">AccessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList">DataOciServiceMeshIngressGatewayAccessLoggingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList">DataOciServiceMeshIngressGatewayHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.meshId">MeshId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.mtls">Mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList">DataOciServiceMeshIngressGatewayMtlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.ingressGatewayIdInput">IngressGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.ingressGatewayId">IngressGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessLogging`<sup>Required</sup> <a name="AccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.accessLogging"></a>

```csharp
public DataOciServiceMeshIngressGatewayAccessLoggingList AccessLogging { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList">DataOciServiceMeshIngressGatewayAccessLoggingList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.hosts"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsList Hosts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList">DataOciServiceMeshIngressGatewayHostsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.meshId"></a>

```csharp
public string MeshId { get; }
```

- *Type:* string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.mtls"></a>

```csharp
public DataOciServiceMeshIngressGatewayMtlsList Mtls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList">DataOciServiceMeshIngressGatewayMtlsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `IngressGatewayIdInput`<sup>Optional</sup> <a name="IngressGatewayIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.ingressGatewayIdInput"></a>

```csharp
public string IngressGatewayIdInput { get; }
```

- *Type:* string

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.ingressGatewayId"></a>

```csharp
public string IngressGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewayAccessLogging <a name="DataOciServiceMeshIngressGatewayAccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayAccessLogging {

};
```


### DataOciServiceMeshIngressGatewayConfig <a name="DataOciServiceMeshIngressGatewayConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IngressGatewayId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.ingressGatewayId">IngressGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway#ingress_gateway_id DataOciServiceMeshIngressGateway#ingress_gateway_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.ingressGatewayId"></a>

```csharp
public string IngressGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway#ingress_gateway_id DataOciServiceMeshIngressGateway#ingress_gateway_id}.

---

### DataOciServiceMeshIngressGatewayHosts <a name="DataOciServiceMeshIngressGatewayHosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHosts {

};
```


### DataOciServiceMeshIngressGatewayHostsListeners <a name="DataOciServiceMeshIngressGatewayHostsListeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListeners.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListeners {

};
```


### DataOciServiceMeshIngressGatewayHostsListenersTls <a name="DataOciServiceMeshIngressGatewayHostsListenersTls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTls {

};
```


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation {

};
```


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle {

};
```


### DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate {

};
```


### DataOciServiceMeshIngressGatewayMtls <a name="DataOciServiceMeshIngressGatewayMtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayMtls {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewayAccessLoggingList <a name="DataOciServiceMeshIngressGatewayAccessLoggingList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayAccessLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayAccessLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayAccessLoggingOutputReference <a name="DataOciServiceMeshIngressGatewayAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayAccessLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLogging">DataOciServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayAccessLogging InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLogging">DataOciServiceMeshIngressGatewayAccessLogging</a>

---


### DataOciServiceMeshIngressGatewayHostsList <a name="DataOciServiceMeshIngressGatewayHostsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayHostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayHostsListenersList <a name="DataOciServiceMeshIngressGatewayHostsListenersList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayHostsListenersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayHostsListenersOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.tls">Tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList">DataOciServiceMeshIngressGatewayHostsListenersTlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListeners">DataOciServiceMeshIngressGatewayHostsListeners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.tls"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListenersTlsList Tls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList">DataOciServiceMeshIngressGatewayHostsListenersTlsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListeners InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListeners">DataOciServiceMeshIngressGatewayHostsListeners</a>

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames">SubjectAlternateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle">TrustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubjectAlternateNames`<sup>Required</sup> <a name="SubjectAlternateNames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames"></a>

```csharp
public string[] SubjectAlternateNames { get; }
```

- *Type:* string[]

---

##### `TrustedCaBundle`<sup>Required</sup> <a name="TrustedCaBundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList TrustedCaBundle { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId">CaBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId"></a>

```csharp
public string CaBundleId { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsList <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation">ClientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTls">DataOciServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientValidation`<sup>Required</sup> <a name="ClientValidation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList ClientValidation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ServerCertificate`<sup>Required</sup> <a name="ServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList ServerCertificate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListenersTls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTls">DataOciServiceMeshIngressGatewayHostsListenersTls</a>

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---


### DataOciServiceMeshIngressGatewayHostsOutputReference <a name="DataOciServiceMeshIngressGatewayHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.hostnames">Hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.listeners">Listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList">DataOciServiceMeshIngressGatewayHostsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHosts">DataOciServiceMeshIngressGatewayHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.hostnames"></a>

```csharp
public string[] Hostnames { get; }
```

- *Type:* string[]

---

##### `Listeners`<sup>Required</sup> <a name="Listeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.listeners"></a>

```csharp
public DataOciServiceMeshIngressGatewayHostsListenersList Listeners { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList">DataOciServiceMeshIngressGatewayHostsListenersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayHosts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHosts">DataOciServiceMeshIngressGatewayHosts</a>

---


### DataOciServiceMeshIngressGatewayMtlsList <a name="DataOciServiceMeshIngressGatewayMtlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayMtlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayMtlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayMtlsOutputReference <a name="DataOciServiceMeshIngressGatewayMtlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayMtlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity">MaximumValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtls">DataOciServiceMeshIngressGatewayMtls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `MaximumValidity`<sup>Required</sup> <a name="MaximumValidity" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity"></a>

```csharp
public double MaximumValidity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayMtls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtls">DataOciServiceMeshIngressGatewayMtls</a>

---



