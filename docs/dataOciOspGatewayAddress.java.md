# `dataOciOspGatewayAddress` Submodule <a name="`dataOciOspGatewayAddress` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayAddress <a name="DataOciOspGatewayAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address oci_osp_gateway_address}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_address.DataOciOspGatewayAddress;

DataOciOspGatewayAddress.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .addressId(java.lang.String)
    .compartmentId(java.lang.String)
    .ospHomeRegion(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.addressId">addressId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#address_id DataOciOspGatewayAddress#address_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#compartment_id DataOciOspGatewayAddress#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#osp_home_region DataOciOspGatewayAddress#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#id DataOciOspGatewayAddress#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressId`<sup>Required</sup> <a name="addressId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.addressId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#address_id DataOciOspGatewayAddress#address_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#compartment_id DataOciOspGatewayAddress#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.ospHomeRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#osp_home_region DataOciOspGatewayAddress#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#id DataOciOspGatewayAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_address.DataOciOspGatewayAddress;

DataOciOspGatewayAddress.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_address.DataOciOspGatewayAddress;

DataOciOspGatewayAddress.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_address.DataOciOspGatewayAddress;

DataOciOspGatewayAddress.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_address.DataOciOspGatewayAddress;

DataOciOspGatewayAddress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOspGatewayAddress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOspGatewayAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOspGatewayAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOspGatewayAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressKey">addressKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.departmentName">departmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line1">line1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line2">line2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line3">line3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line4">line4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.streetName">streetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressIdInput">addressIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressId">addressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressKey"></a>

```java
public java.lang.String getAddressKey();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.contributorClass"></a>

```java
public java.lang.String getContributorClass();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.departmentName"></a>

```java
public java.lang.String getDepartmentName();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.internalNumber"></a>

```java
public java.lang.String getInternalNumber();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line1"></a>

```java
public java.lang.String getLine1();
```

- *Type:* java.lang.String

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line2"></a>

```java
public java.lang.String getLine2();
```

- *Type:* java.lang.String

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line3"></a>

```java
public java.lang.String getLine3();
```

- *Type:* java.lang.String

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line4"></a>

```java
public java.lang.String getLine4();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.municipalInscription"></a>

```java
public java.lang.String getMunicipalInscription();
```

- *Type:* java.lang.String

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.phoneCountryCode"></a>

```java
public java.lang.String getPhoneCountryCode();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.stateInscription"></a>

```java
public java.lang.String getStateInscription();
```

- *Type:* java.lang.String

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

---

##### `addressIdInput`<sup>Optional</sup> <a name="addressIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressIdInput"></a>

```java
public java.lang.String getAddressIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.ospHomeRegionInput"></a>

```java
public java.lang.String getOspHomeRegionInput();
```

- *Type:* java.lang.String

---

##### `addressId`<sup>Required</sup> <a name="addressId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressId"></a>

```java
public java.lang.String getAddressId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayAddressConfig <a name="DataOciOspGatewayAddressConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_address.DataOciOspGatewayAddressConfig;

DataOciOspGatewayAddressConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .addressId(java.lang.String)
    .compartmentId(java.lang.String)
    .ospHomeRegion(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.addressId">addressId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#address_id DataOciOspGatewayAddress#address_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#compartment_id DataOciOspGatewayAddress#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#osp_home_region DataOciOspGatewayAddress#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#id DataOciOspGatewayAddress#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressId`<sup>Required</sup> <a name="addressId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.addressId"></a>

```java
public java.lang.String getAddressId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#address_id DataOciOspGatewayAddress#address_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#compartment_id DataOciOspGatewayAddress#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#osp_home_region DataOciOspGatewayAddress#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#id DataOciOspGatewayAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



