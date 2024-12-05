# `dataOciMediaServicesSystemMediaWorkflow` Submodule <a name="`dataOciMediaServicesSystemMediaWorkflow` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesSystemMediaWorkflow <a name="DataOciMediaServicesSystemMediaWorkflow" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow oci_media_services_system_media_workflow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

dataocimediaservicessystemmediaworkflow.NewDataOciMediaServicesSystemMediaWorkflow(scope Construct, id *string, config DataOciMediaServicesSystemMediaWorkflowConfig) DataOciMediaServicesSystemMediaWorkflow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig">DataOciMediaServicesSystemMediaWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig">DataOciMediaServicesSystemMediaWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesSystemMediaWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

dataocimediaservicessystemmediaworkflow.DataOciMediaServicesSystemMediaWorkflow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

dataocimediaservicessystemmediaworkflow.DataOciMediaServicesSystemMediaWorkflow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

dataocimediaservicessystemmediaworkflow.DataOciMediaServicesSystemMediaWorkflow_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

dataocimediaservicessystemmediaworkflow.DataOciMediaServicesSystemMediaWorkflow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMediaServicesSystemMediaWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMediaServicesSystemMediaWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMediaServicesSystemMediaWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesSystemMediaWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList">DataOciMediaServicesSystemMediaWorkflowItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.items"></a>

```go
func Items() DataOciMediaServicesSystemMediaWorkflowItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList">DataOciMediaServicesSystemMediaWorkflowItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesSystemMediaWorkflowConfig <a name="DataOciMediaServicesSystemMediaWorkflowConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

&dataocimediaservicessystemmediaworkflow.DataOciMediaServicesSystemMediaWorkflowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#compartment_id DataOciMediaServicesSystemMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#id DataOciMediaServicesSystemMediaWorkflow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#name DataOciMediaServicesSystemMediaWorkflow#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#compartment_id DataOciMediaServicesSystemMediaWorkflow#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#id DataOciMediaServicesSystemMediaWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#name DataOciMediaServicesSystemMediaWorkflow#name}.

---

### DataOciMediaServicesSystemMediaWorkflowItems <a name="DataOciMediaServicesSystemMediaWorkflowItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

&dataocimediaservicessystemmediaworkflow.DataOciMediaServicesSystemMediaWorkflowItems {

}
```


### DataOciMediaServicesSystemMediaWorkflowItemsTasks <a name="DataOciMediaServicesSystemMediaWorkflowItemsTasks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

&dataocimediaservicessystemmediaworkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesSystemMediaWorkflowItemsList <a name="DataOciMediaServicesSystemMediaWorkflowItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

dataocimediaservicessystemmediaworkflow.NewDataOciMediaServicesSystemMediaWorkflowItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesSystemMediaWorkflowItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesSystemMediaWorkflowItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesSystemMediaWorkflowItemsOutputReference <a name="DataOciMediaServicesSystemMediaWorkflowItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

dataocimediaservicessystemmediaworkflow.NewDataOciMediaServicesSystemMediaWorkflowItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesSystemMediaWorkflowItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.tasks">Tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList">DataOciMediaServicesSystemMediaWorkflowItemsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItems">DataOciMediaServicesSystemMediaWorkflowItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.tasks"></a>

```go
func Tasks() DataOciMediaServicesSystemMediaWorkflowItemsTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList">DataOciMediaServicesSystemMediaWorkflowItemsTasksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesSystemMediaWorkflowItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItems">DataOciMediaServicesSystemMediaWorkflowItems</a>

---


### DataOciMediaServicesSystemMediaWorkflowItemsTasksList <a name="DataOciMediaServicesSystemMediaWorkflowItemsTasksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

dataocimediaservicessystemmediaworkflow.NewDataOciMediaServicesSystemMediaWorkflowItemsTasksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesSystemMediaWorkflowItemsTasksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference <a name="DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicessystemmediaworkflow"

dataocimediaservicessystemmediaworkflow.NewDataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.enableParameterReference">EnableParameterReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.enableWhenReferencedParameterEquals">EnableWhenReferencedParameterEquals</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.prerequisites">Prerequisites</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks">DataOciMediaServicesSystemMediaWorkflowItemsTasks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableParameterReference`<sup>Required</sup> <a name="EnableParameterReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.enableParameterReference"></a>

```go
func EnableParameterReference() *string
```

- *Type:* *string

---

##### `EnableWhenReferencedParameterEquals`<sup>Required</sup> <a name="EnableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.enableWhenReferencedParameterEquals"></a>

```go
func EnableWhenReferencedParameterEquals() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Prerequisites`<sup>Required</sup> <a name="Prerequisites" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.prerequisites"></a>

```go
func Prerequisites() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesSystemMediaWorkflowItemsTasks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks">DataOciMediaServicesSystemMediaWorkflowItemsTasks</a>

---



