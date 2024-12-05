# `dataOciCapacityManagementOccCapacityRequest` Submodule <a name="`dataOciCapacityManagementOccCapacityRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccCapacityRequest <a name="DataOciCapacityManagementOccCapacityRequest" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request oci_capacity_management_occ_capacity_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.NewDataOciCapacityManagementOccCapacityRequest(scope Construct, id *string, config DataOciCapacityManagementOccCapacityRequestConfig) DataOciCapacityManagementOccCapacityRequest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig">DataOciCapacityManagementOccCapacityRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig">DataOciCapacityManagementOccCapacityRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.DataOciCapacityManagementOccCapacityRequest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.DataOciCapacityManagementOccCapacityRequest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.DataOciCapacityManagementOccCapacityRequest_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.DataOciCapacityManagementOccCapacityRequest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCapacityManagementOccCapacityRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCapacityManagementOccCapacityRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccCapacityRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover">DateExpectedCapacityHandover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList">DataOciCapacityManagementOccCapacityRequestDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList">DataOciCapacityManagementOccCapacityRequestPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestState">RequestState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestType">RequestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestIdInput">OccCapacityRequestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestId">OccCapacityRequestId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DateExpectedCapacityHandover`<sup>Required</sup> <a name="DateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover"></a>

```go
func DateExpectedCapacityHandover() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.details"></a>

```go
func Details() DataOciCapacityManagementOccCapacityRequestDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList">DataOciCapacityManagementOccCapacityRequestDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId"></a>

```go
func OccAvailabilityCatalogId() *string
```

- *Type:* *string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCustomerGroupId"></a>

```go
func OccCustomerGroupId() *string
```

- *Type:* *string

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.patchOperations"></a>

```go
func PatchOperations() DataOciCapacityManagementOccCapacityRequestPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList">DataOciCapacityManagementOccCapacityRequestPatchOperationsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RequestState`<sup>Required</sup> <a name="RequestState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestState"></a>

```go
func RequestState() *string
```

- *Type:* *string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestType"></a>

```go
func RequestType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `OccCapacityRequestIdInput`<sup>Optional</sup> <a name="OccCapacityRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestIdInput"></a>

```go
func OccCapacityRequestIdInput() *string
```

- *Type:* *string

---

##### `OccCapacityRequestId`<sup>Required</sup> <a name="OccCapacityRequestId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestId"></a>

```go
func OccCapacityRequestId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccCapacityRequestConfig <a name="DataOciCapacityManagementOccCapacityRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

&dataocicapacitymanagementocccapacityrequest.DataOciCapacityManagementOccCapacityRequestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OccCapacityRequestId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.occCapacityRequestId">OccCapacityRequestId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#occ_capacity_request_id DataOciCapacityManagementOccCapacityRequest#occ_capacity_request_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OccCapacityRequestId`<sup>Required</sup> <a name="OccCapacityRequestId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.occCapacityRequestId"></a>

```go
OccCapacityRequestId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#occ_capacity_request_id DataOciCapacityManagementOccCapacityRequest#occ_capacity_request_id}.

---

### DataOciCapacityManagementOccCapacityRequestDetails <a name="DataOciCapacityManagementOccCapacityRequestDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

&dataocicapacitymanagementocccapacityrequest.DataOciCapacityManagementOccCapacityRequestDetails {

}
```


### DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct <a name="DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

&dataocicapacitymanagementocccapacityrequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct {

}
```


### DataOciCapacityManagementOccCapacityRequestPatchOperations <a name="DataOciCapacityManagementOccCapacityRequestPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

&dataocicapacitymanagementocccapacityrequest.DataOciCapacityManagementOccCapacityRequestPatchOperations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList <a name="DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.NewDataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.NewDataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">HandoverQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HandoverQuantity`<sup>Required</sup> <a name="HandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```go
func HandoverQuantity() *string
```

- *Type:* *string

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```go
func OccHandoverResourceBlockId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>

---


### DataOciCapacityManagementOccCapacityRequestDetailsList <a name="DataOciCapacityManagementOccCapacityRequestDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.NewDataOciCapacityManagementOccCapacityRequestDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccCapacityRequestDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccCapacityRequestDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccCapacityRequestDetailsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.NewDataOciCapacityManagementOccCapacityRequestDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccCapacityRequestDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity">ActualHandoverQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList">AssociatedOccHandoverResourceBlockList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover">DateActualHandover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover">DateExpectedHandover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity">DemandQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity">ExpectedHandoverQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType">SourceWorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails">DataOciCapacityManagementOccCapacityRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActualHandoverQuantity`<sup>Required</sup> <a name="ActualHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity"></a>

```go
func ActualHandoverQuantity() *string
```

- *Type:* *string

---

##### `AssociatedOccHandoverResourceBlockList`<sup>Required</sup> <a name="AssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```go
func AssociatedOccHandoverResourceBlockList() DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DateActualHandover`<sup>Required</sup> <a name="DateActualHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover"></a>

```go
func DateActualHandover() *string
```

- *Type:* *string

---

##### `DateExpectedHandover`<sup>Required</sup> <a name="DateExpectedHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover"></a>

```go
func DateExpectedHandover() *string
```

- *Type:* *string

---

##### `DemandQuantity`<sup>Required</sup> <a name="DemandQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity"></a>

```go
func DemandQuantity() *string
```

- *Type:* *string

---

##### `ExpectedHandoverQuantity`<sup>Required</sup> <a name="ExpectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity"></a>

```go
func ExpectedHandoverQuantity() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SourceWorkloadType`<sup>Required</sup> <a name="SourceWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType"></a>

```go
func SourceWorkloadType() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccCapacityRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails">DataOciCapacityManagementOccCapacityRequestDetails</a>

---


### DataOciCapacityManagementOccCapacityRequestPatchOperationsList <a name="DataOciCapacityManagementOccCapacityRequestPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.NewDataOciCapacityManagementOccCapacityRequestPatchOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccCapacityRequestPatchOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequest"

dataocicapacitymanagementocccapacityrequest.NewDataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position">Position</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value">Value</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations">DataOciCapacityManagementOccCapacityRequestPatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position"></a>

```go
func Position() *string
```

- *Type:* *string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem"></a>

```go
func SelectedItem() *string
```

- *Type:* *string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection"></a>

```go
func Selection() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value"></a>

```go
func Value() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccCapacityRequestPatchOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations">DataOciCapacityManagementOccCapacityRequestPatchOperations</a>

---



