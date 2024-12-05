# `dataOciServiceManagerProxyServiceEnvironment` Submodule <a name="`dataOciServiceManagerProxyServiceEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceManagerProxyServiceEnvironment <a name="DataOciServiceManagerProxyServiceEnvironment" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment oci_service_manager_proxy_service_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironment;

DataOciServiceManagerProxyServiceEnvironment.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .serviceEnvironmentId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#compartment_id DataOciServiceManagerProxyServiceEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.serviceEnvironmentId">serviceEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#service_environment_id DataOciServiceManagerProxyServiceEnvironment#service_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#id DataOciServiceManagerProxyServiceEnvironment#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#compartment_id DataOciServiceManagerProxyServiceEnvironment#compartment_id}.

---

##### `serviceEnvironmentId`<sup>Required</sup> <a name="serviceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.serviceEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#service_environment_id DataOciServiceManagerProxyServiceEnvironment#service_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#id DataOciServiceManagerProxyServiceEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironment;

DataOciServiceManagerProxyServiceEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironment;

DataOciServiceManagerProxyServiceEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironment;

DataOciServiceManagerProxyServiceEnvironment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironment;

DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciServiceManagerProxyServiceEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciServiceManagerProxyServiceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceManagerProxyServiceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.consoleUrl">consoleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceDefinition">serviceDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentEndpoints">serviceEnvironmentEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentIdInput">serviceEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentId">serviceEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `consoleUrl`<sup>Required</sup> <a name="consoleUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.consoleUrl"></a>

```java
public java.lang.String getConsoleUrl();
```

- *Type:* java.lang.String

---

##### `serviceDefinition`<sup>Required</sup> <a name="serviceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceDefinition"></a>

```java
public DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList getServiceDefinition();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList</a>

---

##### `serviceEnvironmentEndpoints`<sup>Required</sup> <a name="serviceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentEndpoints"></a>

```java
public DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList getServiceEnvironmentEndpoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serviceEnvironmentIdInput`<sup>Optional</sup> <a name="serviceEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentIdInput"></a>

```java
public java.lang.String getServiceEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceEnvironmentId`<sup>Required</sup> <a name="serviceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentId"></a>

```java
public java.lang.String getServiceEnvironmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceManagerProxyServiceEnvironmentConfig <a name="DataOciServiceManagerProxyServiceEnvironmentConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironmentConfig;

DataOciServiceManagerProxyServiceEnvironmentConfig.builder()
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
    .compartmentId(java.lang.String)
    .serviceEnvironmentId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#compartment_id DataOciServiceManagerProxyServiceEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.serviceEnvironmentId">serviceEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#service_environment_id DataOciServiceManagerProxyServiceEnvironment#service_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#id DataOciServiceManagerProxyServiceEnvironment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#compartment_id DataOciServiceManagerProxyServiceEnvironment#compartment_id}.

---

##### `serviceEnvironmentId`<sup>Required</sup> <a name="serviceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.serviceEnvironmentId"></a>

```java
public java.lang.String getServiceEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#service_environment_id DataOciServiceManagerProxyServiceEnvironment#service_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#id DataOciServiceManagerProxyServiceEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciServiceManagerProxyServiceEnvironmentServiceDefinition <a name="DataOciServiceManagerProxyServiceEnvironmentServiceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition;

DataOciServiceManagerProxyServiceEnvironmentServiceDefinition.builder()
    .build();
```


### DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints <a name="DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints;

DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList <a name="DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList;

new DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.get"></a>

```java
public DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference;

new DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.shortDisplayName">shortDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentServiceDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `shortDisplayName`<sup>Required</sup> <a name="shortDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.shortDisplayName"></a>

```java
public java.lang.String getShortDisplayName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.internalValue"></a>

```java
public DataOciServiceManagerProxyServiceEnvironmentServiceDefinition getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentServiceDefinition</a>

---


### DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList <a name="DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList;

new DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.get"></a>

```java
public DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_manager_proxy_service_environment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference;

new DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.internalValue"></a>

```java
public DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints</a>

---



