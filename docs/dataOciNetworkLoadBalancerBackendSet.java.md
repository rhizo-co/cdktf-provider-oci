# `dataOciNetworkLoadBalancerBackendSet` Submodule <a name="`dataOciNetworkLoadBalancerBackendSet` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerBackendSet <a name="DataOciNetworkLoadBalancerBackendSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set oci_network_load_balancer_backend_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSet;

DataOciNetworkLoadBalancerBackendSet.Builder.create(Construct scope, java.lang.String id)
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
    .backendSetName(java.lang.String)
    .networkLoadBalancerId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#backend_set_name DataOciNetworkLoadBalancerBackendSet#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#network_load_balancer_id DataOciNetworkLoadBalancerBackendSet#network_load_balancer_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.backendSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#backend_set_name DataOciNetworkLoadBalancerBackendSet#backend_set_name}.

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.networkLoadBalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#network_load_balancer_id DataOciNetworkLoadBalancerBackendSet#network_load_balancer_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSet;

DataOciNetworkLoadBalancerBackendSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSet;

DataOciNetworkLoadBalancerBackendSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSet;

DataOciNetworkLoadBalancerBackendSet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSet;

DataOciNetworkLoadBalancerBackendSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciNetworkLoadBalancerBackendSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciNetworkLoadBalancerBackendSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciNetworkLoadBalancerBackendSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerBackendSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backends">backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList">DataOciNetworkLoadBalancerBackendSetBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList">DataOciNetworkLoadBalancerBackendSetHealthCheckerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isFailOpen">isFailOpen</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled">isInstantFailoverEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isPreserveSource">isPreserveSource</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backendSetNameInput">backendSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput">networkLoadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `backends`<sup>Required</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backends"></a>

```java
public DataOciNetworkLoadBalancerBackendSetBackendsList getBackends();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList">DataOciNetworkLoadBalancerBackendSetBackendsList</a>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.healthChecker"></a>

```java
public DataOciNetworkLoadBalancerBackendSetHealthCheckerList getHealthChecker();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList">DataOciNetworkLoadBalancerBackendSetHealthCheckerList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `isFailOpen`<sup>Required</sup> <a name="isFailOpen" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isFailOpen"></a>

```java
public IResolvable getIsFailOpen();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isInstantFailoverEnabled`<sup>Required</sup> <a name="isInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled"></a>

```java
public IResolvable getIsInstantFailoverEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPreserveSource`<sup>Required</sup> <a name="isPreserveSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isPreserveSource"></a>

```java
public IResolvable getIsPreserveSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `backendSetNameInput`<sup>Optional</sup> <a name="backendSetNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backendSetNameInput"></a>

```java
public java.lang.String getBackendSetNameInput();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerIdInput`<sup>Optional</sup> <a name="networkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput"></a>

```java
public java.lang.String getNetworkLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.networkLoadBalancerId"></a>

```java
public java.lang.String getNetworkLoadBalancerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerBackendSetBackends <a name="DataOciNetworkLoadBalancerBackendSetBackends" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackends.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetBackends;

DataOciNetworkLoadBalancerBackendSetBackends.builder()
    .build();
```


### DataOciNetworkLoadBalancerBackendSetConfig <a name="DataOciNetworkLoadBalancerBackendSetConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetConfig;

DataOciNetworkLoadBalancerBackendSetConfig.builder()
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
    .backendSetName(java.lang.String)
    .networkLoadBalancerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#backend_set_name DataOciNetworkLoadBalancerBackendSet#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#network_load_balancer_id DataOciNetworkLoadBalancerBackendSet#network_load_balancer_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#backend_set_name DataOciNetworkLoadBalancerBackendSet#backend_set_name}.

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId"></a>

```java
public java.lang.String getNetworkLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#network_load_balancer_id DataOciNetworkLoadBalancerBackendSet#network_load_balancer_id}.

---

### DataOciNetworkLoadBalancerBackendSetHealthChecker <a name="DataOciNetworkLoadBalancerBackendSetHealthChecker" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthChecker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetHealthChecker;

DataOciNetworkLoadBalancerBackendSetHealthChecker.builder()
    .build();
```


### DataOciNetworkLoadBalancerBackendSetHealthCheckerDns <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerDns" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns;

DataOciNetworkLoadBalancerBackendSetHealthCheckerDns.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerBackendSetBackendsList <a name="DataOciNetworkLoadBalancerBackendSetBackendsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetBackendsList;

new DataOciNetworkLoadBalancerBackendSetBackendsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendSetBackendsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkLoadBalancerBackendSetBackendsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetBackendsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference;

new DataOciNetworkLoadBalancerBackendSetBackendsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup">isBackup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain">isDrain</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline">isOffline</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackends">DataOciNetworkLoadBalancerBackendSetBackends</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `isBackup`<sup>Required</sup> <a name="isBackup" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup"></a>

```java
public IResolvable getIsBackup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDrain`<sup>Required</sup> <a name="isDrain" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain"></a>

```java
public IResolvable getIsDrain();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOffline`<sup>Required</sup> <a name="isOffline" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline"></a>

```java
public IResolvable getIsOffline();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue"></a>

```java
public DataOciNetworkLoadBalancerBackendSetBackends getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackends">DataOciNetworkLoadBalancerBackendSetBackends</a>

---


### DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList;

new DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference;

new DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass">queryClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType">queryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes">rcodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns">DataOciNetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `queryClass`<sup>Required</sup> <a name="queryClass" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass"></a>

```java
public java.lang.String getQueryClass();
```

- *Type:* java.lang.String

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

---

##### `rcodes`<sup>Required</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes"></a>

```java
public java.util.List<java.lang.String> getRcodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```java
public java.lang.String getTransportProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue"></a>

```java
public DataOciNetworkLoadBalancerBackendSetHealthCheckerDns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns">DataOciNetworkLoadBalancerBackendSetHealthCheckerDns</a>

---


### DataOciNetworkLoadBalancerBackendSetHealthCheckerList <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetHealthCheckerList;

new DataOciNetworkLoadBalancerBackendSetHealthCheckerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_set.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference;

new DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList">DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis">intervalInMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData">requestData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex">responseBodyRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData">responseData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode">returnCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthChecker">DataOciNetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns"></a>

```java
public DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList getDns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList">DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList</a>

---

##### `intervalInMillis`<sup>Required</sup> <a name="intervalInMillis" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis"></a>

```java
public java.lang.Number getIntervalInMillis();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `requestData`<sup>Required</sup> <a name="requestData" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData"></a>

```java
public java.lang.String getRequestData();
```

- *Type:* java.lang.String

---

##### `responseBodyRegex`<sup>Required</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```java
public java.lang.String getResponseBodyRegex();
```

- *Type:* java.lang.String

---

##### `responseData`<sup>Required</sup> <a name="responseData" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData"></a>

```java
public java.lang.String getResponseData();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `returnCode`<sup>Required</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode"></a>

```java
public java.lang.Number getReturnCode();
```

- *Type:* java.lang.Number

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue"></a>

```java
public DataOciNetworkLoadBalancerBackendSetHealthChecker getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthChecker">DataOciNetworkLoadBalancerBackendSetHealthChecker</a>

---



