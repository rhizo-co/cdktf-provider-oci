# `dataOciMediaServicesMediaWorkflowTaskDeclaration` Submodule <a name="`dataOciMediaServicesMediaWorkflowTaskDeclaration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclaration <a name="DataOciMediaServicesMediaWorkflowTaskDeclaration" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration oci_media_services_media_workflow_task_declaration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaworkflowtaskdeclaration"

dataocimediaservicesmediaworkflowtaskdeclaration.NewDataOciMediaServicesMediaWorkflowTaskDeclaration(scope Construct, id *string, config DataOciMediaServicesMediaWorkflowTaskDeclarationConfig) DataOciMediaServicesMediaWorkflowTaskDeclaration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig">DataOciMediaServicesMediaWorkflowTaskDeclarationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig">DataOciMediaServicesMediaWorkflowTaskDeclarationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetIsCurrent">ResetIsCurrent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCurrent` <a name="ResetIsCurrent" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetIsCurrent"></a>

```go
func ResetIsCurrent()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetName"></a>

```go
func ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowTaskDeclaration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaworkflowtaskdeclaration"

dataocimediaservicesmediaworkflowtaskdeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaworkflowtaskdeclaration"

dataocimediaservicesmediaworkflowtaskdeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaworkflowtaskdeclaration"

dataocimediaservicesmediaworkflowtaskdeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaworkflowtaskdeclaration"

dataocimediaservicesmediaworkflowtaskdeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowTaskDeclaration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowTaskDeclaration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMediaServicesMediaWorkflowTaskDeclaration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowTaskDeclaration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList">DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrentInput">IsCurrentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrent">IsCurrent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.version">Version</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.items"></a>

```go
func Items() DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList">DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsCurrentInput`<sup>Optional</sup> <a name="IsCurrentInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrentInput"></a>

```go
func IsCurrentInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCurrent`<sup>Required</sup> <a name="IsCurrent" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrent"></a>

```go
func IsCurrent() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclarationConfig <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaworkflowtaskdeclaration"

&dataocimediaservicesmediaworkflowtaskdeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Id: *string,
	IsCurrent: interface{},
	Name: *string,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.isCurrent">IsCurrent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.version">Version</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCurrent`<sup>Optional</sup> <a name="IsCurrent" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.isCurrent"></a>

```go
IsCurrent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}.

---

### DataOciMediaServicesMediaWorkflowTaskDeclarationItems <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaworkflowtaskdeclaration"

&dataocimediaservicesmediaworkflowtaskdeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaworkflowtaskdeclaration"

dataocimediaservicesmediaworkflowtaskdeclaration.NewDataOciMediaServicesMediaWorkflowTaskDeclarationItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaworkflowtaskdeclaration"

dataocimediaservicesmediaworkflowtaskdeclaration.NewDataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchema">ParametersSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchemaAllowingReferences">ParametersSchemaAllowingReferences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems">DataOciMediaServicesMediaWorkflowTaskDeclarationItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParametersSchema`<sup>Required</sup> <a name="ParametersSchema" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchema"></a>

```go
func ParametersSchema() *string
```

- *Type:* *string

---

##### `ParametersSchemaAllowingReferences`<sup>Required</sup> <a name="ParametersSchemaAllowingReferences" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchemaAllowingReferences"></a>

```go
func ParametersSchemaAllowingReferences() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesMediaWorkflowTaskDeclarationItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems">DataOciMediaServicesMediaWorkflowTaskDeclarationItems</a>

---


