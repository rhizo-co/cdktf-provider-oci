# `dataOciPsqlDbSystemConnectionDetail` Submodule <a name="`dataOciPsqlDbSystemConnectionDetail` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDbSystemConnectionDetail <a name="DataOciPsqlDbSystemConnectionDetail" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail oci_psql_db_system_connection_detail}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.NewDataOciPsqlDbSystemConnectionDetail(scope Construct, id *string, config DataOciPsqlDbSystemConnectionDetailConfig) DataOciPsqlDbSystemConnectionDetail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig">DataOciPsqlDbSystemConnectionDetailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig">DataOciPsqlDbSystemConnectionDetailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDbSystemConnectionDetail resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.DataOciPsqlDbSystemConnectionDetail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.DataOciPsqlDbSystemConnectionDetail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.DataOciPsqlDbSystemConnectionDetail_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.DataOciPsqlDbSystemConnectionDetail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciPsqlDbSystemConnectionDetail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciPsqlDbSystemConnectionDetail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciPsqlDbSystemConnectionDetail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDbSystemConnectionDetail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.instanceEndpoints">InstanceEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.primaryDbEndpoint">PrimaryDbEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `InstanceEndpoints`<sup>Required</sup> <a name="InstanceEndpoints" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.instanceEndpoints"></a>

```go
func InstanceEndpoints() DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList</a>

---

##### `PrimaryDbEndpoint`<sup>Required</sup> <a name="PrimaryDbEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.primaryDbEndpoint"></a>

```go
func PrimaryDbEndpoint() DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList</a>

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDbSystemConnectionDetailConfig <a name="DataOciPsqlDbSystemConnectionDetailConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

&dataocipsqldbsystemconnectiondetail.DataOciPsqlDbSystemConnectionDetailConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DbSystemId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciPsqlDbSystemConnectionDetailInstanceEndpoints <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpoints" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

&dataocipsqldbsystemconnectiondetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints {

}
```


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

&dataocipsqldbsystemconnectiondetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint {

}
```


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

&dataocipsqldbsystemconnectiondetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.NewDataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get"></a>

```go
func Get(index *f64) DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.NewDataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint</a>

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.NewDataOciPsqlDbSystemConnectionDetailInstanceEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get"></a>

```go
func Get(index *f64) DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.NewDataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.dbInstanceId">DbInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints">DataOciPsqlDbSystemConnectionDetailInstanceEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbInstanceId`<sup>Required</sup> <a name="DbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.dbInstanceId"></a>

```go
func DbInstanceId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.endpoint"></a>

```go
func Endpoint() DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciPsqlDbSystemConnectionDetailInstanceEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints">DataOciPsqlDbSystemConnectionDetailInstanceEndpoints</a>

---


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.NewDataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get"></a>

```go
func Get(index *f64) DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldbsystemconnectiondetail"

dataocipsqldbsystemconnectiondetail.NewDataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint</a>

---



