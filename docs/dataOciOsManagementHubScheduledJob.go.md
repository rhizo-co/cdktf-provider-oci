# `dataOciOsManagementHubScheduledJob` Submodule <a name="`dataOciOsManagementHubScheduledJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubScheduledJob <a name="DataOciOsManagementHubScheduledJob" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_job oci_os_management_hub_scheduled_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJob(scope Construct, id *string, config DataOciOsManagementHubScheduledJobConfig) DataOciOsManagementHubScheduledJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig">DataOciOsManagementHubScheduledJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig">DataOciOsManagementHubScheduledJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubScheduledJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJob_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubScheduledJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubScheduledJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubScheduledJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubScheduledJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.isManagedByAutonomousLinux">IsManagedByAutonomousLinux</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.isRestricted">IsRestricted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.isSubcompartmentIncluded">IsSubcompartmentIncluded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.lifecycleStageIds">LifecycleStageIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.managedCompartmentIds">ManagedCompartmentIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.managedInstanceGroupIds">ManagedInstanceGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.operations">Operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList">DataOciOsManagementHubScheduledJobOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.recurringRule">RecurringRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.retryIntervals">RetryIntervals</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.scheduleType">ScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.timeLastExecution">TimeLastExecution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.timeNextExecution">TimeNextExecution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.workRequestIds">WorkRequestIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.scheduledJobIdInput">ScheduledJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.scheduledJobId">ScheduledJobId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsManagedByAutonomousLinux`<sup>Required</sup> <a name="IsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.isManagedByAutonomousLinux"></a>

```go
func IsManagedByAutonomousLinux() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRestricted`<sup>Required</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.isRestricted"></a>

```go
func IsRestricted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSubcompartmentIncluded`<sup>Required</sup> <a name="IsSubcompartmentIncluded" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.isSubcompartmentIncluded"></a>

```go
func IsSubcompartmentIncluded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleStageIds`<sup>Required</sup> <a name="LifecycleStageIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.lifecycleStageIds"></a>

```go
func LifecycleStageIds() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedCompartmentIds`<sup>Required</sup> <a name="ManagedCompartmentIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.managedCompartmentIds"></a>

```go
func ManagedCompartmentIds() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstanceGroupIds`<sup>Required</sup> <a name="ManagedInstanceGroupIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.managedInstanceGroupIds"></a>

```go
func ManagedInstanceGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstanceIds`<sup>Required</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.managedInstanceIds"></a>

```go
func ManagedInstanceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.operations"></a>

```go
func Operations() DataOciOsManagementHubScheduledJobOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList">DataOciOsManagementHubScheduledJobOperationsList</a>

---

##### `RecurringRule`<sup>Required</sup> <a name="RecurringRule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.recurringRule"></a>

```go
func RecurringRule() *string
```

- *Type:* *string

---

##### `RetryIntervals`<sup>Required</sup> <a name="RetryIntervals" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.retryIntervals"></a>

```go
func RetryIntervals() *[]*f64
```

- *Type:* *[]*f64

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.scheduleType"></a>

```go
func ScheduleType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastExecution`<sup>Required</sup> <a name="TimeLastExecution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.timeLastExecution"></a>

```go
func TimeLastExecution() *string
```

- *Type:* *string

---

##### `TimeNextExecution`<sup>Required</sup> <a name="TimeNextExecution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.timeNextExecution"></a>

```go
func TimeNextExecution() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WorkRequestIds`<sup>Required</sup> <a name="WorkRequestIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.workRequestIds"></a>

```go
func WorkRequestIds() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduledJobIdInput`<sup>Optional</sup> <a name="ScheduledJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.scheduledJobIdInput"></a>

```go
func ScheduledJobIdInput() *string
```

- *Type:* *string

---

##### `ScheduledJobId`<sup>Required</sup> <a name="ScheduledJobId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.scheduledJobId"></a>

```go
func ScheduledJobId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubScheduledJobConfig <a name="DataOciOsManagementHubScheduledJobConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

&dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ScheduledJobId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.scheduledJobId">ScheduledJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_job#scheduled_job_id DataOciOsManagementHubScheduledJob#scheduled_job_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScheduledJobId`<sup>Required</sup> <a name="ScheduledJobId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobConfig.property.scheduledJobId"></a>

```go
ScheduledJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_job#scheduled_job_id DataOciOsManagementHubScheduledJob#scheduled_job_id}.

---

### DataOciOsManagementHubScheduledJobOperations <a name="DataOciOsManagementHubScheduledJobOperations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

&dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJobOperations {

}
```


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

&dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails {

}
```


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

&dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable {

}
```


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

&dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable {

}
```


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

&dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall {

}
```


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

&dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove {

}
```


### DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails <a name="DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

&dataociosmanagementhubscheduledjob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubScheduledJobOperationsList <a name="DataOciOsManagementHubScheduledJobOperationsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disable">Disable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enable">Enable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.install">Install</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.remove">Remove</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disable"></a>

```go
func Disable() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enable"></a>

```go
func Enable() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList</a>

---

##### `Install`<sup>Required</sup> <a name="Install" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.install"></a>

```go
func Install() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList</a>

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.remove"></a>

```go
func Remove() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a>

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference <a name="DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>

---


### DataOciOsManagementHubScheduledJobOperationsOutputReference <a name="DataOciOsManagementHubScheduledJobOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetails">ManageModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.operationType">OperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.packageNames">PackageNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIds">SoftwareSourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetails">SwitchModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNames">WindowsUpdateNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperations">DataOciOsManagementHubScheduledJobOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManageModuleStreamsDetails`<sup>Required</sup> <a name="ManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetails"></a>

```go
func ManageModuleStreamsDetails() DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList</a>

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.operationType"></a>

```go
func OperationType() *string
```

- *Type:* *string

---

##### `PackageNames`<sup>Required</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.packageNames"></a>

```go
func PackageNames() *[]*string
```

- *Type:* *[]*string

---

##### `SoftwareSourceIds`<sup>Required</sup> <a name="SoftwareSourceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIds"></a>

```go
func SoftwareSourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `SwitchModuleStreamsDetails`<sup>Required</sup> <a name="SwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetails"></a>

```go
func SwitchModuleStreamsDetails() DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList</a>

---

##### `WindowsUpdateNames`<sup>Required</sup> <a name="WindowsUpdateNames" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNames"></a>

```go
func WindowsUpdateNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperations">DataOciOsManagementHubScheduledJobOperations</a>

---


### DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList <a name="DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference <a name="DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjob"

dataociosmanagementhubscheduledjob.NewDataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJob.DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a>

---



