# `dataOciOcvpEsxiHost` Submodule <a name="`dataOciOcvpEsxiHost` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpEsxiHost <a name="DataOciOcvpEsxiHost" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_host oci_ocvp_esxi_host}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpesxihost"

dataociocvpesxihost.NewDataOciOcvpEsxiHost(scope Construct, id *string, config DataOciOcvpEsxiHostConfig) DataOciOcvpEsxiHost
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig">DataOciOcvpEsxiHostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig">DataOciOcvpEsxiHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpEsxiHost resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpesxihost"

dataociocvpesxihost.DataOciOcvpEsxiHost_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpesxihost"

dataociocvpesxihost.DataOciOcvpEsxiHost_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpesxihost"

dataociocvpesxihost.DataOciOcvpEsxiHost_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpesxihost"

dataociocvpesxihost.DataOciOcvpEsxiHost_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOcvpEsxiHost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOcvpEsxiHost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOcvpEsxiHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpEsxiHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.billingContractEndDate">BillingContractEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.billingDonorHostId">BillingDonorHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.computeInstanceId">ComputeInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.currentCommitment">CurrentCommitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.currentSku">CurrentSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.failedEsxiHostId">FailedEsxiHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.gracePeriodEndDate">GracePeriodEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.hostOcpuCount">HostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.hostShapeName">HostShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.isBillingContinuationInProgress">IsBillingContinuationInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.isBillingSwappingInProgress">IsBillingSwappingInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nextCommitment">NextCommitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nextSku">NextSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nonUpgradedEsxiHostId">NonUpgradedEsxiHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.replacementEsxiHostId">ReplacementEsxiHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.sddcId">SddcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.swapBillingHostId">SwapBillingHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.upgradedReplacementEsxiHostId">UpgradedReplacementEsxiHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiHostIdInput">EsxiHostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiHostId">EsxiHostId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BillingContractEndDate`<sup>Required</sup> <a name="BillingContractEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.billingContractEndDate"></a>

```go
func BillingContractEndDate() *string
```

- *Type:* *string

---

##### `BillingDonorHostId`<sup>Required</sup> <a name="BillingDonorHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.billingDonorHostId"></a>

```go
func BillingDonorHostId() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.computeAvailabilityDomain"></a>

```go
func ComputeAvailabilityDomain() *string
```

- *Type:* *string

---

##### `ComputeInstanceId`<sup>Required</sup> <a name="ComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.computeInstanceId"></a>

```go
func ComputeInstanceId() *string
```

- *Type:* *string

---

##### `CurrentCommitment`<sup>Required</sup> <a name="CurrentCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.currentCommitment"></a>

```go
func CurrentCommitment() *string
```

- *Type:* *string

---

##### `CurrentSku`<sup>Required</sup> <a name="CurrentSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.currentSku"></a>

```go
func CurrentSku() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiSoftwareVersion"></a>

```go
func EsxiSoftwareVersion() *string
```

- *Type:* *string

---

##### `FailedEsxiHostId`<sup>Required</sup> <a name="FailedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.failedEsxiHostId"></a>

```go
func FailedEsxiHostId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GracePeriodEndDate`<sup>Required</sup> <a name="GracePeriodEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.gracePeriodEndDate"></a>

```go
func GracePeriodEndDate() *string
```

- *Type:* *string

---

##### `HostOcpuCount`<sup>Required</sup> <a name="HostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.hostOcpuCount"></a>

```go
func HostOcpuCount() *f64
```

- *Type:* *f64

---

##### `HostShapeName`<sup>Required</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.hostShapeName"></a>

```go
func HostShapeName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsBillingContinuationInProgress`<sup>Required</sup> <a name="IsBillingContinuationInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.isBillingContinuationInProgress"></a>

```go
func IsBillingContinuationInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsBillingSwappingInProgress`<sup>Required</sup> <a name="IsBillingSwappingInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.isBillingSwappingInProgress"></a>

```go
func IsBillingSwappingInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NextCommitment`<sup>Required</sup> <a name="NextCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nextCommitment"></a>

```go
func NextCommitment() *string
```

- *Type:* *string

---

##### `NextSku`<sup>Required</sup> <a name="NextSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nextSku"></a>

```go
func NextSku() *string
```

- *Type:* *string

---

##### `NonUpgradedEsxiHostId`<sup>Required</sup> <a name="NonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nonUpgradedEsxiHostId"></a>

```go
func NonUpgradedEsxiHostId() *string
```

- *Type:* *string

---

##### `ReplacementEsxiHostId`<sup>Required</sup> <a name="ReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.replacementEsxiHostId"></a>

```go
func ReplacementEsxiHostId() *string
```

- *Type:* *string

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.sddcId"></a>

```go
func SddcId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SwapBillingHostId`<sup>Required</sup> <a name="SwapBillingHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.swapBillingHostId"></a>

```go
func SwapBillingHostId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpgradedReplacementEsxiHostId`<sup>Required</sup> <a name="UpgradedReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.upgradedReplacementEsxiHostId"></a>

```go
func UpgradedReplacementEsxiHostId() *string
```

- *Type:* *string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.vmwareSoftwareVersion"></a>

```go
func VmwareSoftwareVersion() *string
```

- *Type:* *string

---

##### `EsxiHostIdInput`<sup>Optional</sup> <a name="EsxiHostIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiHostIdInput"></a>

```go
func EsxiHostIdInput() *string
```

- *Type:* *string

---

##### `EsxiHostId`<sup>Required</sup> <a name="EsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiHostId"></a>

```go
func EsxiHostId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpEsxiHostConfig <a name="DataOciOcvpEsxiHostConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpesxihost"

&dataociocvpesxihost.DataOciOcvpEsxiHostConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EsxiHostId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.esxiHostId">EsxiHostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_host#esxi_host_id DataOciOcvpEsxiHost#esxi_host_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EsxiHostId`<sup>Required</sup> <a name="EsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.esxiHostId"></a>

```go
EsxiHostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_host#esxi_host_id DataOciOcvpEsxiHost#esxi_host_id}.

---



