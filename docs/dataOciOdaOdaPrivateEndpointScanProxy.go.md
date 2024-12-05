# `dataOciOdaOdaPrivateEndpointScanProxy` Submodule <a name="`dataOciOdaOdaPrivateEndpointScanProxy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOdaOdaPrivateEndpointScanProxy <a name="DataOciOdaOdaPrivateEndpointScanProxy" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy oci_oda_oda_private_endpoint_scan_proxy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpointscanproxy"

dataociodaodaprivateendpointscanproxy.NewDataOciOdaOdaPrivateEndpointScanProxy(scope Construct, id *string, config DataOciOdaOdaPrivateEndpointScanProxyConfig) DataOciOdaOdaPrivateEndpointScanProxy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig">DataOciOdaOdaPrivateEndpointScanProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig">DataOciOdaOdaPrivateEndpointScanProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpointscanproxy"

dataociodaodaprivateendpointscanproxy.DataOciOdaOdaPrivateEndpointScanProxy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpointscanproxy"

dataociodaodaprivateendpointscanproxy.DataOciOdaOdaPrivateEndpointScanProxy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpointscanproxy"

dataociodaodaprivateendpointscanproxy.DataOciOdaOdaPrivateEndpointScanProxy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpointscanproxy"

dataociodaodaprivateendpointscanproxy.DataOciOdaOdaPrivateEndpointScanProxy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOdaOdaPrivateEndpointScanProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOdaOdaPrivateEndpointScanProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOdaOdaPrivateEndpointScanProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.scanListenerInfos">ScanListenerInfos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList">DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.scanListenerType">ScanListenerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput">OdaPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointScanProxyIdInput">OdaPrivateEndpointScanProxyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId">OdaPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointScanProxyId">OdaPrivateEndpointScanProxyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ScanListenerInfos`<sup>Required</sup> <a name="ScanListenerInfos" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.scanListenerInfos"></a>

```go
func ScanListenerInfos() DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList">DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList</a>

---

##### `ScanListenerType`<sup>Required</sup> <a name="ScanListenerType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.scanListenerType"></a>

```go
func ScanListenerType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `OdaPrivateEndpointIdInput`<sup>Optional</sup> <a name="OdaPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput"></a>

```go
func OdaPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `OdaPrivateEndpointScanProxyIdInput`<sup>Optional</sup> <a name="OdaPrivateEndpointScanProxyIdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointScanProxyIdInput"></a>

```go
func OdaPrivateEndpointScanProxyIdInput() *string
```

- *Type:* *string

---

##### `OdaPrivateEndpointId`<sup>Required</sup> <a name="OdaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId"></a>

```go
func OdaPrivateEndpointId() *string
```

- *Type:* *string

---

##### `OdaPrivateEndpointScanProxyId`<sup>Required</sup> <a name="OdaPrivateEndpointScanProxyId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointScanProxyId"></a>

```go
func OdaPrivateEndpointScanProxyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOdaOdaPrivateEndpointScanProxyConfig <a name="DataOciOdaOdaPrivateEndpointScanProxyConfig" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpointscanproxy"

&dataociodaodaprivateendpointscanproxy.DataOciOdaOdaPrivateEndpointScanProxyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OdaPrivateEndpointId: *string,
	OdaPrivateEndpointScanProxyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId">OdaPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointScanProxyId">OdaPrivateEndpointScanProxyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_scan_proxy_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_scan_proxy_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OdaPrivateEndpointId`<sup>Required</sup> <a name="OdaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId"></a>

```go
OdaPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}.

---

##### `OdaPrivateEndpointScanProxyId`<sup>Required</sup> <a name="OdaPrivateEndpointScanProxyId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointScanProxyId"></a>

```go
OdaPrivateEndpointScanProxyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_scan_proxy_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_scan_proxy_id}.

---

### DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos <a name="DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpointscanproxy"

&dataociodaodaprivateendpointscanproxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList <a name="DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpointscanproxy"

dataociodaodaprivateendpointscanproxy.NewDataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.get"></a>

```go
func Get(index *f64) DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference <a name="DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpointscanproxy"

dataociodaodaprivateendpointscanproxy.NewDataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn">ScanListenerFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp">ScanListenerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort">ScanListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos">DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScanListenerFqdn`<sup>Required</sup> <a name="ScanListenerFqdn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn"></a>

```go
func ScanListenerFqdn() *string
```

- *Type:* *string

---

##### `ScanListenerIp`<sup>Required</sup> <a name="ScanListenerIp" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp"></a>

```go
func ScanListenerIp() *string
```

- *Type:* *string

---

##### `ScanListenerPort`<sup>Required</sup> <a name="ScanListenerPort" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort"></a>

```go
func ScanListenerPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos">DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos</a>

---



